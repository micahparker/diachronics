import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import axios, { AxiosResponse, AxiosAdapter } from 'axios';

import * as jsonpAdapter from 'axios-jsonp';
import * as _ from 'lodash';

import { SelectItem } from 'primeng/api';

import data_books_OT from './data/books_OT';
import data_periods, { Period } from './data/periods';
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
export class AppComponent implements OnInit, OnDestroy {
  periods: Period[] = data_periods.sort((a, b) => a.date - b.date);
  periods_items: SelectItem[] = data_periods.map(p => {
    return { label: p.abbrev, value: p };
  });
  periods_selected: Period[] = [];

  books: Book[] = data_books_OT;
  book = 'Genesis';
  book_num = 1;
  chapter = 2;
  left_chapters: Chapter[] = [];
  right_chapters: Chapter[] = [];

  chronologies: SelectItem[] = [
    { label: 'Documentary', value: data_documentary },
    { label: 'Supplementary', value: data_supplementary }
  ];
  chronology_selected: Chronology[] = data_documentary;
  chronology_supplementary: Chronology[] = data_supplementary;
  chronology_documentary: Chronology[] = data_documentary;

  showVerseNumbers = true;
  showLineByLine = false;
  showLiminal = true;


  showSideMenu = false;

  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true);
    // init content
    this.click_chapter(this.book, this.chapter);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }

  click_book(): void {
    this.showSideMenu = true;
  }

  async click_chapter(book: string, chapter: number): Promise<void> {
    this.book = book;
    this.chapter = chapter;
    // clear verses
    this.left_chapters.length = 0;
    this.right_chapters.length = 0;
    // get new content!
    await Promise.all([
      this.getBibleText('net', this.book, this.chapter).then(v => this.left_chapters.push(v)),
      this.getBibleText('bhs', this.book, this.chapter).then(v => this.right_chapters.push(v))
    ]);
    // filter periods
    this.periods_items = this.periods.filter(p => {
      // tslint:disable-next-line:max-line-length
      return  this.left_chapters.filter(c => c.verses &&
                c.verses.filter(v => v.period && v.period.date === p.date && v.period.era === v.period.era).length
              ).length > 0
                ||
              this.right_chapters.filter(c => c.verses &&
                c.verses.filter(v => v.period && v.period.date === p.date && v.period.era === v.period.era).length
              ).length > 0
      ;
    }).map(p => {
      return { label: p.abbrev, value: p };
    });
    // hide the side menu
    this.showSideMenu = false;
  }

  click_period(period: Period): void {
    const filtered = this.periods_selected.filter(p => p.date !== period.date);
    if (this.periods_selected.length !== filtered.length) {
      this.periods_selected = filtered;
    } else {
      this.periods_selected.push(period);
    }
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
            linebreak: this.showLineByLine || (v.text.indexOf('</p>') > -1)
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
            linebreak: this.showLineByLine || (json.chapter[v].verse.match(/\\r|\\n/) > -1)
          })
        );
      }
    }

    return activeChapter;
  }

  processVerse(trans: string, chapter: Chapter, verse: Verse): Verse[] {
    // tslint:disable:triple-equals
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
    const text_split = verse.text.replace(/^\s+|\s+$/g, '').split(' ');
    const verseSeg = (c: Chronology | null, text_start_idx: number, text_end_idx?: number, isend?: boolean) => {
      const _verse: Verse = _.cloneDeep(verse);
      _verse.number = verse_inc + 0;
      // split the text up!
      if (text_start_idx === text_end_idx) {
        _verse.text = text_split[text_start_idx] + '!';
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
        const periods = this.periods.filter(p => p.date == c.Date && p.era == c.Era);
        if (periods.length) {
          _verse.period = periods[0];
        }
        _verse.chronology = c;
        _verse.classification = `${c.Era}-${c.Date}`;
      }
      // add to array!
      verses.push(_verse);
      // increment
      verse_inc = (Math.round((verse_inc + .01) * 100) / 100);
    };
    // loop over each match and break the verse apart
    data.forEach((c, i) => {
      const start_chapter = c['Start Chapter'] + 0;
      const end_chapter = c['End Chapter'] + 0;
      const start_verse = c['Start Verse'] + 0;
      const end_verse = c['End Verse'] + 0;
      const start_word = (
        c[`${lang} intraverse start word index #`] ||
        c[`${lang} intraverse start word order index #`] ||
        c[`${lang} intraverse start word index number`] ||
        c[`${lang} intraverse start word order index number`]) - 1;
      const end_word = (
        c[`${lang} intraverse end word index #`] ||
        c[`${lang} intraverse end word order index #`] ||
        c[`${lang} intraverse end word index number`] ||
        c[`${lang} intraverse end word order index number`]
      );
      // tslint:disable:one-line
      if (start_chapter == chapter.number && start_verse == verse.number) {
        // save off the first part of the verse
        if (!verses.length && start_word > 0) {
          verseSeg(null, 0, start_word);
        }
        // it not ending in this verse then just use the whole rest of the verse
        if (end_verse != verse.number) {
          verseSeg(c, start_word, null, true);
        }
        // we need to split up the verse
        else {
          verseSeg(c, start_word, end_word);
        }
      }
      else if (end_chapter == chapter.number && end_verse == verse.number) {
        // save off the end of the verse
        if (end_word && end_word > -1 && end_word < text_split.length) {
          verseSeg(c, 0, end_word);
        }
        else {
          // not sure what to do with no real end specified, so just do nothing
        }
      }
      else {
        // the whole verse fits inside the match!
        verses.push(verse);
      }
    });
    // if there are no matches just return the passed in verse
    if (!verses.length) {
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
    return verses.filter(v => _.trim(v.text).length);
  }

  numArray(from: number, to: number): number[] {
    return Array(to - from).fill(0).map((n, i) => i + from);
  }

  stringify(s) {
    return JSON.stringify(s);
  }

  scroll(e): void {
    const leastVisibleChapter = 1;
    const leastVisibleVerse = 1;

    if (e.target.className.indexOf('book_left') > -1) {
      console.log(1);
    } else if (e.target.className.indexOf('book_right') > -1) {
      console.log(2);
    }
  }
}
