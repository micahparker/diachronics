import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import axios, { AxiosResponse, AxiosAdapter } from 'axios';

import * as jsonpAdapter from 'axios-jsonp';
import * as _ from 'lodash';

import { SelectItem } from 'primeng/api';

import data_books_OT from './data/books_OT';

import Chapter from './models/chapter';
import Period from './models/period';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ChapterComponent {
  @Input() chapter: Chapter;
  @Input() aperiods: Period[];
  @Input() showVerseNumbers: boolean;
  @Input() showLineByLine: boolean;
  @Input() showLiminal: boolean;

  numRound(num: number) {
    return Math.floor(num);
  }
}
