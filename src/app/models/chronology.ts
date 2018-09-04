import * as _ from 'lodash';

export default class Chronology {
    'Christian Book Order': number;
    'Book': string;
    'Start Chapter': number;
    'Start Verse': number;
    'Diff Eng start ch': number | null;
    'Diff Eng start vs': number | null;
    'ENGLISH intraverse start word index #'?: number | null;
    'HEBREW Intraverse Start word index #'?: number | null;
    'ENGLISH intraverse start word order index #'?: number | null;
    'HEBREW intraverse start word order index #'?: number | null;
    'End Chapter': number;
    'End Verse': number;
    'Diff Eng end ch': number | null;
    'Diff Eng end vs': number | null;
    'ENGLISH intraverse end word index #'?: number | null;
    'HEBREW Intraverse End word index number'?: number | null;
    'ENGLISH intraverse end word order index #'?: number | null;
    'HEBREW Intraverse End word order index number'?: number | null;
    'Date': number | null;
    'Era': string;
    'Source Name': string;
    'Alt translation'?: string | null;
    'Footnote text'?: string | null;
    [propName: string]: any;

    constructor(data?: any) {
        if (data) {
            this['Christian Book Order'] = data['Christian Book Order'];
            this['Book'] = data['Book'];
            this['Start Chapter'] = _.parseInt(data['Start Chapter']);
            this['Start Verse'] = _.parseInt(data['Start Verse']);
            this['Diff Eng start ch'] = _.parseInt(data['Diff Eng start ch']);
            this['Diff Eng start vs'] = _.parseInt(data['Diff Eng start vs']);
            this['ENGLISH intraverse start word index #'] = _.parseInt(data['ENGLISH intraverse start word index #']);
            this['HEBREW Intraverse Start word index #'] = _.parseInt(data['HEBREW Intraverse Start word index #']);
            this['ENGLISH intraverse start word order index #'] = _.parseInt(data['ENGLISH intraverse start word order index #']);
            this['HEBREW intraverse start word order index #'] = _.parseInt(data['HEBREW intraverse start word order index #']);
            this['End Chapter'] = _.parseInt(data['End Chapter']);
            this['End Verse'] = _.parseInt(data['End Verse']);
            this['Diff Eng end ch'] = _.parseInt(data['Diff Eng end ch']);
            this['Diff Eng end vs'] = _.parseInt(data['Diff Eng end vs']);
            this['ENGLISH intraverse end word index #'] = _.parseInt(data['ENGLISH intraverse end word index #']);
            this['HEBREW Intraverse End word index number'] = _.parseInt(data['HEBREW Intraverse End word index number']);
            this['ENGLISH intraverse end word order index #'] = _.parseInt(data['ENGLISH intraverse end word order index #']);
            this['HEBREW Intraverse End word order index number'] = _.parseInt(data['HEBREW Intraverse End word order index number']);
            this['Date'] = _.parseInt(data['Date']);
            this['Era'] = data['Era'];
            this['Source Name'] = data['Source Name'];
            this['Alt translation'] = data['Alt translation'];
            this['Footnote text'] = data['Footnote text'];
        }
    }
}
