import { Component, OnInit } from '@angular/core';
import axios, { AxiosResponse, AxiosAdapter } from 'axios';

import * as jsonpAdapter from 'axios-jsonp';

import books_OT from './data/books_OT';
import Book from './models/book';
import Chapter from './models/chapter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  books: Book[];
  book: string;
  book_num: number;
  chapter: number;
  left_chapters: Chapter[];
  right_chapters: Chapter[];

  showSideMenu: boolean;

  ngOnInit() {
    this.books = books_OT;
    this.book = 'Genesis';
    this.book_num = 1;
    this.chapter = 1;
    this.left_chapters = [];
    this.right_chapters = [];
    // init content
    Promise.all([
      this.getBibleText('net', this.book, this.chapter).then(v => this.left_chapters.push(v)),
      this.getBibleText('bhs', this.book, this.chapter).then(v => this.right_chapters.push(v))
    ]);
  }

  async click_book(): Promise<void> {
    this.showSideMenu = true;
  }

  async getBibleText(trans: string, book: string, start_chapter: number, start_verse?: number, end_verse?: number): Promise<Chapter> {
    let resp: AxiosResponse;
    let activeChapter: Chapter | null = null;
    const passage = `${book} ${start_chapter}${start_verse ? ':' + start_verse : ''}${end_verse ? '-' + end_verse : ''}`;

    if (trans.toLowerCase() === 'net') {
      // @ts-ignore
      resp = await axios({
        url: `http://labs.bible.org/api/?type=json&formatting=para&passage=${passage}`,
        adapter: jsonpAdapter as AxiosAdapter,
        callbackParamName: 'callback'
      });
      console.log(resp.data[0]);
      resp.data.forEach((v) => {
        if (activeChapter === null) {
          activeChapter = {
            title: v.title,
            number: v.chapter,
            verses: [],
            rtl: trans.toLowerCase() === 'bhs'
          };
        }
        activeChapter.verses.push({
          number: v.verse,
          text: v.text.replace(/\<\/?p ?[a-z\=\"]{0,}\>/gi, '').replace(/\<a .*\<\/a\>/gi, ''),
          linebreak: (v.text.indexOf('</p>') > -1)
        });
      });
      console.log(activeChapter.verses[0]);
    } else {
      // @ts-ignore
      resp = await axios({
        url: `http://getbible.net/json?version=${trans}&passage=${passage}`,
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
        activeChapter.verses.push({
          // tslint:disable-next-line:radix
          number: json.chapter[v].verse_nr,
          text: json.chapter[v].verse,
          linebreak: trans.toLowerCase() === 'bhs'
        });
      }
    }

    return activeChapter;
  }

  numArray(from: number, to: number) {
    return Array(to - from).fill(0).map((n, i) => i + from);
  }
}
