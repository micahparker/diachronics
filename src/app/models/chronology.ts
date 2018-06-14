export default interface Chronology {
	"Christian Book Order": string;
	"Book": string;
	"Start Chapter": number;
	"Start Verse": number;
	"Diff Eng start ch": number | null;
	"Diff Eng start vs": number | null;
	"ENGLISH intraverse start word index #": number;
	"HEBREW Intraverse Start word index #": number;
	"End Chapter": number;
	"End Verse": number;
	"Diff Eng end ch": number | null;
	"Diff Eng end vs": number | null;
	"ENGLISH intraverse end word index #": number | null;
	"HEBREW Intraverse End word index number": number | null;
	"Date": number | null;
	"Era": string;
	"Source Name": string;
	"Alt translation": string | null;
	"Footnote text": string | null;
}