import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import axios, { AxiosResponse, AxiosAdapter } from 'axios';

import * as jsonpAdapter from 'axios-jsonp';
import * as _ from 'lodash';

import { SelectItem } from 'primeng/api';

import data_books_OT from './data/books_OT';
//import data_periods, { Period } from './data/periods';
//import data_documentary from './data/documentary';
//import data_supplementary from './data/supplementary';

import Book from './models/book';
import Chapter from './models/chapter';
import Verse from './models/verse';
import Chronology from './models/chronology';
import Period from './models/period';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit, OnDestroy {
  periods: Period[] = [];
  periods_items: SelectItem[] = [{ label: '', value: false }];
  periods_selected: Period[] = [];
  period_colors: string[] = ['D09429', '7338A7', 'B71A4F', '507BC3', '859F4A', '827570', 'E28539'];

  books: Book[] = data_books_OT;
  book = 'Genesis';
  book_num = 1;
  chapter = 1;
  verse = 1;
  left_translation = 'net';
  right_translation = 'bhs';
  left_chapters: Chapter[] = [];
  right_chapters: Chapter[] = [];

  chronologies: SelectItem[] = [];
  chronology_selected: Chronology[] = [];

  versedisplays: SelectItem[] = [
    { label: 'Liminal', value: true },
    { label: 'Continuous', value: false }
  ];

  verselines: SelectItem[] = [
    { label: 'Line / Verses', value: true },
    { label: 'Natural', value: false }
  ];

  versenumbers: SelectItem[] = [
    { label: 'Show Verse #', value: true },
    { label: 'Hide Verse #', value: false }
  ];

  showVerseNumbers = true;
  showLineByLine = false;
  showLiminal = true;
  showSideMenu = false;
  showBiblePicker = false;

  scroll_bound: null;
  scroll_processing = false;
  scroll_chapter: any;
  scroll_verse: any;
  scroll_timeout = null;

  async ngOnInit() {
    var cachebuster = 0; //Math.round(new Date().getTime() / 1000);
    this.scroll_bound = this.scroll.bind(this);
    window.addEventListener('scroll', this.scroll_bound, true);
    // get data
    this.periods = (await axios({
      url: `https://www.micahparker.com/diachronics/data/sources.json?cbnow=${cachebuster}`
    })).data.value.map(d => new Period(d));
    this.chronologies.push({
      'label': 'Documentary',
      'value': (await axios({
            url: `https://www.micahparker.com/diachronics/data/documentary.json?cbnow=${cachebuster}`
          })).data.value.filter(d => d.Book).map(d => new Chronology(d))
    });
    this.chronologies.push({
      'label': 'Supplementary',
      'value': (await axios({
            url: `https://www.micahparker.com/diachronics/data/supplementary.json?cbnow=${cachebuster}`
          })).data.value.filter(d => d.Book).map(d => new Chronology(d))
    });
    this.chronology_selected = this.chronologies[1].value;
    // init content
    this.getContent(this.book, this.chapter).then(() =>
      this.getContent(this.book, this.chapter + 1)
    ).then( () =>
      this.getContent(this.book, this.chapter + 2)
    );
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll_bound, true);
  }

  click_menu(): void {
    this.showSideMenu = true;
  }

  click_book(): void {
    this.showBiblePicker = true;
  }

  async click_chapter(book: string, chapter: number): Promise<void> {
    this.book = book;
    this.chapter = chapter;
    // clear chapters
    this.left_chapters.length = 0;
    this.right_chapters.length = 0;
    // now get the content
    this.getContent(book, chapter);
    // hide the side menu
    this.showBiblePicker = false;
  }

  click_period(period: Period): void {
    const filtered = this.periods_selected.filter(p => p.date !== period.date);
    if (this.periods_selected.length !== filtered.length) {
      this.periods_selected = filtered;
    } else {
      this.periods_selected.push(period);
    }
  }

  click_chronology(): void {
    // clear chapters
    this.left_chapters.length = 0;
    this.right_chapters.length = 0;
    // now get the content
    this.getContent(this.book, this.chapter);
    // hide the side menu
    this.showSideMenu = false;
  }

  async getContent(book: string, chapter: number) {
    // get new content!
    await Promise.all([
      this.getBibleText(this.left_translation, book, chapter).then(v => {
        this.left_chapters.push(v);
        this.left_chapters.sort((a, b) => a.number - b.number);
      }),
      this.getBibleText(this.right_translation, book, chapter).then(v => {
        this.right_chapters.push(v);
        this.right_chapters.sort((a, b) => a.number - b.number);
      })
    ]);
    // filter the periods
    this.processPeriods();
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
            linebreak: (json.chapter[v].verse.match(/\\r|\\n/) > -1)
          })
        );
      }
    }

    return activeChapter;
  }

  processPeriods() {
    // filter periods
    this.periods_items = this.periods.filter(p => {
      // tslint:disable-next-line:max-line-length
      return  this.left_chapters.filter(c => c.verses &&
                c.verses.filter(v => v.period && v.period.date === p.date && v.period.name === p.name).length
              ).length > 0
                ||
              this.right_chapters.filter(c => c.verses &&
                c.verses.filter(v => v.period && v.period.date === p.date && v.period.name === p.name).length
              ).length > 0
      ;
    }).map((p, i) => {
      p.color_text = `#${this.period_colors[i]}`;
      return { label: p.abbrev, value: p };
    });
    // need to insert an empty if there are nont
    if (this.periods_items.length === 0) {
      this.periods_items = [{ label: '', value: false }];
    }
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
        (c['Start Chapter'] <= chapter.number && c['End Chapter'] >= chapter.number) &&
        (c['Start Chapter'] != chapter.number || c['Start Verse'] <= verse.number) &&
        (c['End Chapter'] != chapter.number || c['End Verse'] >= verse.number);
    }).sort((a, b) => ((a['Start Chapter'] * 1000) + a['Start Verse']) - ((b['Start Chapter'] * 1000) + b['Start Verse']));
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
      // set the chronology for ref in the template
      if (c) {
        const periods = this.periods.filter(p => p.date == c.Date && (p.abbrev == c['Source Name'] || p.old_abbrev == c['Source Name']));
        if (periods.length) {
          _verse.period = periods[0];
        }
        _verse.chronology = c;
        // override verse text?
        if (c['Alt translation']) {
          // _verse.text = c['Alt translation'];
        }
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
      const start_word = c[`${lang.toLowerCase()}_intra_start`] - 1;
      const end_word = c[`${lang.toLowerCase()}_intra_end`] || 99999;

      // tslint:disable:one-line
      if (start_chapter == chapter.number && start_verse == verse.number) {
        // save off the first part of the verse
        if (!verses.length && start_word > 0) {
          verseSeg(null, 0, start_word);
        }
        // it not ending in this verse then just use the whole rest of the verse
        if (end_chapter != chapter.number || end_verse != verse.number) {
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
          verseSeg(c, 0, null, true);
        }
      }
      else {
        // the whole verse fits inside the match!
        verseSeg(c, 0, null, true);
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

  async scroll(e): Promise<void> {
    // tslint:disable:radix
    //clearTimeout(this.scroll_timeout);
    //this.scroll_timeout = setTimeout(() => { scroll(e) }, 1000);
    if (this.scroll_processing) {
      return;
    }
    this.scroll_processing = true;
    //  ok, we arent already processing so continue
    const scrollTopThreshold = 20;
    // detect visible chapters
    const active_dom_chapters: any[] = Array.from(e.target.querySelectorAll('.chapter')).filter((c: any, i: number) => {
      if (e.target.scrollTop < scrollTopThreshold && i === 0) {
        return true;
      }
      return (e.target.scrollTop) >= (c.offsetTop - e.target.offsetTop) &&
        (e.target.scrollTop) < ((c.offsetTop - e.target.offsetTop) + c.offsetHeight);
    }).reverse();
    if (!active_dom_chapters.length) {
      this.scroll_processing = false;
      return;
    }
    // detect visible verses
    const active_dom_verses: any[] = Array.from(active_dom_chapters[0].querySelectorAll('.verse')).filter((c: any, i: number) => {
      if (e.target.scrollTop < ((active_dom_chapters[0].offsetTop - e.target.offsetTop) + scrollTopThreshold) && i === 0) {
        return true;
      }
      return (e.target.scrollTop) >= (c.offsetTop - e.target.offsetTop) &&
        (e.target.scrollTop) < ((c.offsetTop - e.target.offsetTop) + c.offsetHeight);
    }).reverse();
    if (!active_dom_chapters.length) {
      this.scroll_processing = false;
      return;
    }
    // set global chapter
    this.chapter = parseInt(active_dom_chapters.length ? active_dom_chapters[0].dataset.number : 1) || this.chapter;
    this.verse = parseInt(active_dom_verses.length ? active_dom_verses[0].dataset.number : 1) || this.verse;
    // need to load more chapters?
    if (e.target.scrollTop + e.target.clientHeight >= e.target.scrollHeight - 100) {
      // set min height so we dont get scroll jump
      e.target.style.minHeight = e.target.clientHeight;
      // get the new content
      await this.getContent(this.book, this.chapter + 1);
    }
    // move other pane?
    if (active_dom_chapters.length && active_dom_verses.length) {
      const chapterClass = active_dom_chapters[0].className.split(' ').join('.');
      const verseClass = this.verse > 1 ? active_dom_verses[0].className.split(' ').join('.') : 'chapter_number';
      // scroll other pane
      if (e.target.className.indexOf('book_left') > -1) {
        const domNode = document.querySelector(`.book_right .${chapterClass} .${verseClass}`);
        if (domNode) {
          domNode.scrollIntoView();
        }
      } else if (e.target.className.indexOf('book_right') > -1) {
        const domNode = document.querySelector(`.book_left .${chapterClass} .${verseClass}`);
        if (domNode) {
          domNode.scrollIntoView();
        }
      }
    }
    // ok, let scrolling trigger again... with timeout otherwise it causes a ping pong effect
    setTimeout(() => this.scroll_processing = false, 100);
  }
}
