import Chronology from './chronology';

export default interface Verse {
    number: number;
    text: string;
    linebreak: boolean;
    chronology?: Chronology;
    classification?: string;
}
