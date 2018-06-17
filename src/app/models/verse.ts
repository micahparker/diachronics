import Chronology from './chronology';
import { Period } from '../data/periods';

export default interface Verse {
    number: number;
    text: string;
    linebreak: boolean;
    period?: Period;
    chronology?: Chronology;
    classification?: string;
}
