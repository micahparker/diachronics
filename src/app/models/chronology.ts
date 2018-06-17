export default interface Chronology {
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
}
