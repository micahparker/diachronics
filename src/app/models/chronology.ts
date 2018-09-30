// tslint:disable:radix

import * as _ from 'lodash';

export default class Chronology {
    'Christian Book Order': number;
    'Book': string;
    'Start Chapter': number;
    'Start Verse': number;
    'Diff Eng start ch': number | null;
    'Diff Eng start vs': number | null;
    'english_intra_start'?: number | null;
    'hebrew_intra_start'?: number | null;
    'End Chapter': number;
    'End Verse': number;
    'Diff Eng end ch': number | null;
    'Diff Eng end vs': number | null;
    'english_intra_end'?: number | null;
    'hebrew_intra_end'?: number | null;
    'Date': number | null;
    'Era': string;
    'Source Name': string;
    'Alt translation'?: string | null;
    'Footnote text'?: string | null;
    [propName: string]: any;

    constructor(data?: any) {
        if (data) {
            _.extend(this, data);
            this['Start Chapter'] = _.parseInt(data['Start Chapter']);
            this['Start Verse'] = _.parseInt(data['Start Verse']);
            this['Diff Eng start ch'] = _.parseInt(data['Diff Eng start ch']);
            this['Diff Eng start vs'] = _.parseInt(data['Diff Eng start vs']);
            this['english_intra_start'] = (
                _.parseInt(data['ENGLISH intraverse start word index #']) ||
                _.parseInt(data['ENGLISH intraverse start word order index #']) ||
                _.parseInt(data['ENGLISH intraverse start word index number']) ||
                _.parseInt(data['ENGLISH intraverse start word order index number']) ||
                _.parseInt(data['ENGLISH intraverse start word index _x0023_']) ||
                _.parseInt(data['ENGLISH intraverse start word order index _x0023_']) ||
                _.parseInt(data['ENGLISH Intraverse Start word index _x0023_']) ||
                _.parseInt(data['ENGLISH Intraverse Start word index number'])
            );
            this['hebrew_intra_start'] = (
                _.parseInt(data['HEBREW intraverse start word index #']) ||
                _.parseInt(data['HEBREW intraverse start word order index #']) ||
                _.parseInt(data['HEBREW intraverse start word index number']) ||
                _.parseInt(data['HEBREW intraverse start word order index number']) ||
                _.parseInt(data['HEBREW intraverse start word index _x0023_']) ||
                _.parseInt(data['HEBREW intraverse start word order index _x0023_']) ||
                _.parseInt(data['HEBREW Intraverse Start word index _x0023_']) ||
                _.parseInt(data['HEBREW Intraverse Start word index number'])
            );
            this['End Chapter'] = _.parseInt(data['End Chapter']);
            this['End Verse'] = _.parseInt(data['End Verse']);
            this['Diff Eng end ch'] = _.parseInt(data['Diff Eng end ch']);
            this['Diff Eng end vs'] = _.parseInt(data['Diff Eng end vs']);
            this['english_intra_end'] = (
                _.parseInt(data['ENGLISH intraverse end word index #']) ||
                _.parseInt(data['ENGLISH intraverse end word order index #']) ||
                _.parseInt(data['ENGLISH intraverse end word index number']) ||
                _.parseInt(data['ENGLISH intraverse end word order index number']) ||
                _.parseInt(data['ENGLISH intraverse end word index _x0023_']) ||
                _.parseInt(data['ENGLISH intraverse end word order index _x0023_']) ||
                _.parseInt(data['ENGLISH Intraverse End word index _x0023_']) ||
                _.parseInt(data['English Intraverse End word index number'])
            );
            this['hebrew_intra_end'] = (
                _.parseInt(data['HEBREW intraverse end word index number']) ||
                _.parseInt(data['HEBREW intraverse end word order index #']) ||
                _.parseInt(data['HEBREW intraverse end word index number']) ||
                _.parseInt(data['HEBREW intraverse end word order index number']) ||
                _.parseInt(data['HEBREW intraverse end word index _x0023_']) ||
                _.parseInt(data['HEBREW intraverse end word order index _x0023_']) ||
                _.parseInt(data['HEBREW Intraverse End word index _x0023_']) ||
                _.parseInt(data['HEBREW Intraverse End word index number'])
            );
            this['Date'] = _.parseInt(data['Date']);
        }
    }
}
