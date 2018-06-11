import Chapter from './chapter';

export default interface Book {
    title: string;
    number: number;
    num_of_chapters: number;
    num_of_verses: number;
    chapters?: Chapter[];
}
