import Chronology from './chronology';
import Period from '../models/period';

export default interface Verse {
    number: number;
    text: string;
    alt_text?: string;
    footnote?: string;
    linebreak: boolean;
    period?: Period;
    chronology?: Chronology;
    classification?: string;
}
