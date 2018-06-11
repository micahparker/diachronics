import Verse from './verse';

export default interface Chapter {
    title: string;
    number: number;
    verses?: Verse[];
    rtl: boolean;
}
