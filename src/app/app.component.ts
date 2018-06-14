import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import axios, { AxiosResponse, AxiosAdapter } from 'axios';

import * as jsonpAdapter from 'axios-jsonp';
import * as _ from 'lodash';

import { SelectItem } from 'primeng/api';

import data_books_OT from './data/books_OT';
import data_documentary from './data/documentary';
import data_supplementary from './data/supplementary';


import Book from './models/book';
import Chapter from './models/chapter';
import Verse from './models/verse';
import Chronology from './models/chronology';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  title = 'app';

  chronologies: SelectItem[];
  books: Book[];
  book: string;
  book_num: number;
  chapter: number;
  left_chapters: Chapter[];
  right_chapters: Chapter[];

  chronology_selected: Chronology[];
  chronology_supplementary: Chronology[];
  chronology_documentary: Chronology[];

  showSideMenu: boolean;

  ngOnInit() {
    this.chronology_supplementary = data_supplementary;
    this.chronology_documentary = data_documentary;
    this.chronologies = [
      { label: 'Documentary', value: this.chronology_documentary },
      { label: 'Supplementary', value: this.chronology_supplementary }
    ];
    this.chronology_selected = this.chronology_documentary;
    this.books = data_books_OT;
    this.book = 'Genesis';
    this.book_num = 1;
    this.chapter = 2;
    this.left_chapters = [];
    this.right_chapters = [];
    // init content
    Promise.all([
      this.getBibleText('net', this.book, this.chapter).then(v => this.left_chapters.push(v)),
      this.getBibleText('bhs', this.book, this.chapter).then(v => this.right_chapters.push(v))
    ]);
  }

  click_book(): void {
    this.showSideMenu = true;
  }

  async click_chapter(book, chapter: number): Promise<void> {
    this.book = book;
    this.chapter = chapter;
    // clear verses
    this.left_chapters.length = 0;
    this.right_chapters.length = 0;
    // get new content!
    Promise.all([
      this.getBibleText('net', this.book, this.chapter).then(v => this.left_chapters.push(v)),
      this.getBibleText('bhs', this.book, this.chapter).then(v => this.right_chapters.push(v))
    ]);
    // hide the side menu
    this.showSideMenu = false;
  }

  async getBibleText(trans: string, book: string, start_chapter: number, start_verse?: number, end_verse?: number): Promise<Chapter> {
    let resp: AxiosResponse;
    let activeChapter: Chapter | null = null;
    const passage = `${book} ${start_chapter}${start_verse ? ':' + start_verse : ''}${end_verse ? '-' + end_verse : ''}`;

    if (trans.toLowerCase() === 'net') {
      // @ts-ignore
      resp = await axios({
        url: `//labs.bible.org/api/?type=json&formatting=para&passage=${passage}`,
        adapter: jsonpAdapter as AxiosAdapter,
        callbackParamName: 'callback'
      });
      resp.data.forEach((v) => {
        if (activeChapter === null) {
          activeChapter = {
            title: v.title,
            number: v.chapter,
            verses: [],
            rtl: trans.toLowerCase() === 'bhs'
          };
        }
        activeChapter.verses = activeChapter.verses.concat(
          this.processVerse(trans, activeChapter, {
            number: v.verse,
            text: v.text.replace(/\<\/?p ?[a-z\=\"]{0,}\>/gi, '').replace(/\<a .*\<\/a\>/gi, ''),
            linebreak: (v.text.indexOf('</p>') > -1)
          })
        );
      });
    } else {
      // @ts-ignore
      resp = await axios({
        url: `//getbible.net/json?version=${trans}&passage=${passage}`,
        adapter: jsonpAdapter as AxiosAdapter,
        callbackParamName: 'getbible'
      });
      const json = (start_verse) ? resp.data.book[0] : resp.data;
      activeChapter = {
        title: '',
        number: json.chapter_nr,
        verses: [],
        rtl: trans.toLowerCase() === 'bhs'
      };
      // tslint:disable-next-line:forin
      for (const v in json.chapter) {
        activeChapter.verses = activeChapter.verses.concat(
          this.processVerse(trans, activeChapter, {
            number: json.chapter[v].verse_nr,
            text: json.chapter[v].verse,
            linebreak: trans.toLowerCase() === 'bhs'
          })
        );
      }
    }

    return activeChapter;
  }

  processVerse(trans: string, chapter: Chapter, verse: Verse): Verse[] {
    const verses: Verse[] = [];
    const lang = trans === 'bhs' ? 'HEBREW' : 'ENGLISH';
    let verse_inc = parseFloat(verse.number.toString() + '.01');
    let verse_lst = -1;
    // filter data
    const data = this.chronology_selected.filter((c) => {
      return c.Book.toLowerCase() === this.book.toLowerCase() &&
        c['Start Chapter'] <= chapter.number &&
        c['End Chapter'] >= chapter.number &&
        c['Start Verse'] <= verse.number &&
        c['End Verse'] >= verse.number;
    }).sort((a, b) => a['Start Verse'] - b['Start Verse']);
    // define verse seg add
    const text_split = verse.text.split(' ');
    const verseSeg = (c: Chronology | null, text_start_idx: number, text_end_idx?: number, isend?: boolean) => {
      const _verse: Verse = _.cloneDeep(verse);
      _verse.number = verse_inc + 0;
      // split the text up!
      if (text_start_idx === text_end_idx) {
        _verse.text = text_split[text_start_idx];
        verse_lst = text_start_idx;
      } else {
        _verse.text = text_split.slice(text_start_idx, text_end_idx || text_split.length).join(' ');
        verse_lst = text_end_idx || text_split.length;
      }
      // add space?
      if (text_start_idx > 0) {
        _verse.text = ' ' + _verse.text;
      }
      if (text_end_idx < text_split.length) {
        _verse.text = _verse.text + ' ';
      }
      // override line break if broken up
      if ((!isend && text_end_idx < text_split.length) && _verse.linebreak) {
        _verse.linebreak = false;
      }
      // set the chronology / class for ref in the template
      if (c) {
        _verse.chronology = c;
        console.log();
        _verse.classification = `${c.Era}-${c.Date}`;
      }
      // add to array!
      verses.push(_verse);
      // increment
      verse_inc = (Math.round((verse_inc + .01) * 100) / 100);
    };
    // loop over each match and break the verse apart
    data.forEach((c, i) => {

      console.log('chron', verse.number, c);

      const start_chapter = c['Start Chapter'] + 0;
      const end_chapter = c['End Chapter'] + 0;
      const start_verse = c['Start Verse'] + 0;
      const end_verse = c['End Verse'] + 0;
      const start_word = (c[`${lang} intraverse start word index #`] || c[`${lang} intraverse start word order index #`]) - 1;
      const end_word = (c[`${lang} intraverse end word index #`] || c[`${lang} intraverse end word order index #`]) - 1;
      // tslint:disable:one-line
      // tslint:disable:triple-equals
      if (start_chapter == chapter.number && start_verse == verse.number) {

        console.log('start is start');

        // save off the first part of the verse
        if (!verses.length && start_word > 0) {

          console.log('save start');

          verseSeg(null, 0, start_word);
        }
        // it not ending in this verse then just use the whole rest of the verse
        if (end_verse != verse.number) {

          console.log('end is end');

          verseSeg(c, start_word, null, true);
        }
        // we need to split up the verse
        else {

          console.log('split', start_word, end_word, `(${text_split.length})`);

          verseSeg(c, start_word, end_word);
        }
      }
      else if (end_chapter == chapter.number && end_verse == verse.number) {
        // save off the end of the verse
        if (end_word && end_word > -1 && end_word < text_split.length) {
          console.log('save start');

          verseSeg(c, 0, end_word);
        }
        else {
          // not sure what to do with no real end specified, so just do nothing
        }
      }
      else {

        console.log('whole');

        // the whole verse fits inside the match!
        verses.push(verse);
      }
    });
    // if there are no matches just return the passed in verse
    if (!verses.length) {

      console.log('empty');

      verses.push(verse);
    }
    // if we are all done with segments but there is more verse left
    if (verse_lst > -1 && verse_lst < (text_split.length - 1)) {
      verseSeg(null, verse_lst + 1);
    }
    // add a space to the last segment for readability
    const last = verses[verses.length - 1];
    if (last.text.substring(last.text.length - 1, last.text.length) != ' ') {
      last.text += ' ';
    }
    // return the verses
    return verses;
  }

  numArray(from: number, to: number): number[] {
    return Array(to - from).fill(0).map((n, i) => i + from);
  }

  numRound(num: number) {
    return Math.floor(num);
  }
}
