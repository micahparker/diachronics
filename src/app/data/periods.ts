export interface Period {
    name: string;
    abbrev: string;
    old_abbrev: string;
    new_abbrev: boolean;
    color_text: string;
    color_bg?: string;
    date: number;
}

// tslint:disable:max-line-length
export default [
    /*
    { name: 'Pre-P Northern Jacob fragments', abbrev: 'PreP N', color_text: '#D09429', color_bg: '', date: 760, era: 'BCE' },
    { name: 'Pre-P Souther fragments 1', abbrev: 'PreP S1', color_text: '#7338A7', color_bg: '', date: 625, era: 'BCE' },
    { name: 'Pre-P Souther fragments 2', abbrev: 'PreP S2', color_text: '#B71A4F', color_bg: '', date: 550, era: 'BCE' },
    { name: 'P', abbrev: 'P', color_text: '#507BC3', color_bg: '', date: 530, era: 'BCE' },
    { name: 'GenR1 (first supplementary layer)', abbrev: 'GenR1', color_text: '#859F4A', color_bg: '', date: 500, era: 'BCE' },
    { name: 'HS', abbrev: 'HS', color_text: 'black', color_bg: '', date: 450, era: 'BCE' },
    { name: 'Joseph Novella', abbrev: 'JosN', color_text: '#827570', color_bg: '', date: 425, era: 'BCE' },
    { name: 'Joseph additions', abbrev: 'JosA', color_text: '#827570', color_bg: '#D2D3D6', date: 405, era: 'BCE' },
    { name: 'GenR2', abbrev: 'GenR2', color_text: '#4073B0', color_bg: '#DEE8FE', date: 400, era: 'BCE' },
    { name: 'Hexateuch Redactor', abbrev: 'HexR', color_text: '#57823E', color_bg: '#C7E7A8', date: 375, era: 'BCE' },
    { name: 'Various late glosses/additions (from diverse settings)', abbrev: 'Various', color_text: '#E28539', color_bg: '', date: 390, era: 'BCE' },
    */

    {
        'date': 1225,
        'old_abbrev': 'Ancient Exodus Song',
        'new_abbrev': true,
        'abbrev': 'ExodSong',
        'name': 'Ancient Exodus Song'
    },
    {
        'date': 1225,
        'old_abbrev': 'Song of Miriam',
        'new_abbrev': true,
        'abbrev': 'Miriam',
        'name': 'Song of Miriam'
    },
    {
        'date': 1200,
        'old_abbrev': 'Song of Moses',
        'new_abbrev': true,
        'abbrev': 'MosesSong',
        'name': 'Song of Moses'
    },
    {
        'date': 1200,
        'old_abbrev': 'Blessing of Moses',
        'new_abbrev': true,
        'abbrev': 'MosesBless',
        'name': 'Blessing of Moses'
    },
    {
        'date': 1100,
        'old_abbrev': 'Balaam\'s First Oracle',
        'new_abbrev': true,
        'abbrev': 'Balaam1',
        'name': 'Balaam\'s First Oracle'
    },
    {
        'date': 1100,
        'old_abbrev': 'Balaam\'s Second Oracle',
        'new_abbrev': true,
        'abbrev': 'Balaam2',
        'name': 'Balaam\'s Second Oracle'
    },
    {
        'date': 1100,
        'old_abbrev': 'Song of Deborah',
        'new_abbrev': true,
        'abbrev': 'Deborah',
        'name': 'Song of Deborah'
    },
    {
        'date': 1100,
        'old_abbrev': 'Ancient Jacob Poem',
        'new_abbrev': true,
        'abbrev': 'Jacob Poem',
        'name': 'Ancient Jacob Poem'
    },
    {
        'date': 950,
        'old_abbrev': 'J (Jahwist)',
        'new_abbrev': true,
        'abbrev': 'J',
        'name': 'Jahwist'
    },
    {
        'date': 850,
        'old_abbrev': 'E (Elohist)',
        'new_abbrev': true,
        'abbrev': 'E',
        'name': 'Elohist'
    },
    {
        'date': 775,
        'old_abbrev': 'Amos',
        'new_abbrev': true,
        'abbrev': 'Am',
        'name': 'Amos (Synchronic)'
    },
    {
        'date': 775,
        'old_abbrev': 'JdgG',
        'new_abbrev': false,
        'abbrev': '',
        'name': 'Judges Grundschrift'
    },
    {
        'date': 760,
        'old_abbrev': 'Pre-P Northern Jacob Fragments',
        'new_abbrev': true,
        'abbrev': 'JacFrg',
        'name': 'Northern Jacob Fragments'
    },
    {
        'date': 750,
        'old_abbrev': 'Jeroboam II Poem',
        'new_abbrev': true,
        'abbrev': 'JerobPoem',
        'name': 'Jeroboam II Poem'
    },
    {
        'date': 750,
        'old_abbrev': 'Joseph Novella',
        'new_abbrev': false,
        'abbrev': 'Joseph',
        'name': 'Joseph Novella'
    },
    {
        'date': 750,
        'old_abbrev': 'Book of Saviors',
        'new_abbrev': true,
        'abbrev': 'BkSav',
        'name': 'Book of Saviors'
    },
    {
        'date': 730,
        'old_abbrev': 'Hosea',
        'new_abbrev': true,
        'abbrev': 'Hos',
        'name': 'Hosea (Synchronic)'
    },
    {
        'date': 700,
        'old_abbrev': 'First Isaiah',
        'new_abbrev': true,
        'abbrev': 'Isa1',
        'name': 'First Isaiah'
    },
    {
        'date': 730,
        'old_abbrev': 'AmosG',
        'new_abbrev': true,
        'abbrev': 'AmG',
        'name': 'Amos Grundschrift'
    },
    {
        'date': 725,
        'old_abbrev': 'Joseph Additions',
        'new_abbrev': true,
        'abbrev': 'JosephAdd',
        'name': 'Joseph Additions'
    },
    {
        'date': 725,
        'old_abbrev': 'Micah',
        'new_abbrev': true,
        'abbrev': 'Mic',
        'name': 'Micah (Synchronic)'
    },
    {
        'date': 725,
        'old_abbrev': 'Balaam Story',
        'new_abbrev': true,
        'abbrev': 'Balaam',
        'name': 'Independent Balaam Story'
    },
    {
        'date': 715,
        'old_abbrev': 'RJE (Jehovist Redactor)',
        'new_abbrev': true,
        'abbrev': 'JE',
        'name': 'Jehovist Redactor'
    },
    {
        'date': 715,
        'old_abbrev': 'HosG',
        'new_abbrev': false,
        'abbrev': '',
        'name': 'Hosea Grundschrift'
    },
    {
        'date': 650,
        'old_abbrev': 'Pre-P',
        'new_abbrev': false,
        'abbrev': '',
        'name': 'Pre-P Cult Rituals'
    },
    {
        'date': 630,
        'old_abbrev': 'HosR1',
        'new_abbrev': false,
        'abbrev': '',
        'name': 'Hosea Redactor 1'
    },
    {
        'date': 625,
        'old_abbrev': 'Pre-P Southern Fragments 1 (Abraham-Lot)',
        'new_abbrev': true,
        'abbrev': 'SouthFrg1',
        'name': 'Southern Genesis Fragments 1'
    },
    {
        'date': 625,
        'old_abbrev': 'ExG',
        'new_abbrev': false,
        'abbrev': '',
        'name': 'Exodus Grundschrift'
    },
    {
        'date': 625,
        'old_abbrev': 'Zephaniah',
        'new_abbrev': true,
        'abbrev': 'Zeph',
        'name': 'Zephaniah (Synchronic)'
    },
    {
        'date': 625,
        'old_abbrev': 'Nahum',
        'new_abbrev': true,
        'abbrev': 'Nah',
        'name': 'Nahum (Synchronic)'
    },
    {
        'date': 620,
        'old_abbrev': 'Dtn',
        'new_abbrev': false,
        'abbrev': '',
        'name': 'Deuteronomist'
    },
    {
        'date': 620,
        'old_abbrev': 'Dtr',
        'new_abbrev': false,
        'abbrev': '',
        'name': 'Deuteronomistic School'
    },
    {
        'date': 610,
        'old_abbrev': 'JdgR',
        'new_abbrev': false,
        'abbrev': '',
        'name': 'Judges Redactor'
    },
    {
        'date': 610,
        'old_abbrev': 'Nahum',
        'new_abbrev': true,
        'abbrev': 'Nah (Supplementary)',
        'name': 'Nahum (Supplementary)'
    },
    {
        'date': 605,
        'old_abbrev': 'JerG',
        'new_abbrev': false,
        'abbrev': '',
        'name': 'Jeremiah Grundschrift'
    },
    {
        'date': 605,
        'old_abbrev': 'HabG',
        'new_abbrev': false,
        'abbrev': '',
        'name': 'Habakkuk Grundschrift'
    },
    {
        'date': 604,
        'old_abbrev': 'ZephG',
        'new_abbrev': false,
        'abbrev': '',
        'name': 'Zephaniah Grundschrift'
    },
    {
        'date': 600,
        'old_abbrev': 'Covenant Code',
        'new_abbrev': true,
        'abbrev': 'CC',
        'name': 'Covenant Code'
    },
    {
        'date': 600,
        'old_abbrev': 'Various Additions to Numbers',
        'new_abbrev': true,
        'abbrev': 'VarNum',
        'name': 'Various Additions to Numbers'
    },
    {
        'date': 600,
        'old_abbrev': 'AmosR1',
        'new_abbrev': true,
        'abbrev': 'AmR1',
        'name': 'Amos Redactor 1'
    },
    {
        'date': 600,
        'old_abbrev': 'MicahG',
        'new_abbrev': true,
        'abbrev': 'MicG',
        'name': 'Micah Grundschrift'
    },
    {
        'date': 600,
        'old_abbrev': 'DtrH1',
        'new_abbrev': false,
        'abbrev': '',
        'name': 'Deuteronomistic History 1'
    },
    {
        'date': 590,
        'old_abbrev': 'Jeremiah',
        'new_abbrev': true,
        'abbrev': 'Jer',
        'name': 'Jeremiah (Synchronic)'
    },
    {
        'date': 585,
        'old_abbrev': 'Obadiah',
        'new_abbrev': true,
        'abbrev': 'Obad',
        'name': 'Obadiah (Synchronic)'
    },
    {
        'date': 580,
        'old_abbrev': 'AmosR2',
        'new_abbrev': true,
        'abbrev': 'AmR2',
        'name': 'Amos Redactor 2'
    },
    {
        'date': 575,
        'old_abbrev': 'Psalms 1-89',
        'new_abbrev': true,
        'abbrev': 'Ps 1-89',
        'name': 'Psalms 1-89'
    },
    {
        'date': 570,
        'old_abbrev': 'Ezekiel',
        'new_abbrev': true,
        'abbrev': 'Ezek',
        'name': 'Ezekiel (Synchronic)'
    },
    {
        'date': 570,
        'old_abbrev': 'EzekG',
        'new_abbrev': false,
        'abbrev': '',
        'name': 'Ezekiel Grundschrift'
    },
    {
        'date': 570,
        'old_abbrev': 'Lamentations',
        'new_abbrev': true,
        'abbrev': 'Lam',
        'name': 'Lamentations (Synchronic)'
    },
    {
        'date': 550,
        'old_abbrev': 'Second Isaiah',
        'new_abbrev': true,
        'abbrev': 'Isa2',
        'name': 'Second Isaiah (Synchronic)'
    },
    {
        'date': 550,
        'old_abbrev': 'P (Priestly)',
        'new_abbrev': true,
        'abbrev': 'P-Doc',
        'name': 'Priestly Source (Documentary)'
    },
    {
        'date': 550,
        'old_abbrev': 'Pre-P Southern Fragments 2',
        'new_abbrev': true,
        'abbrev': 'SouthFrg2',
        'name': 'Southern Genesis Fragments 2'
    },
    {
        'date': 550,
        'old_abbrev': 'DtrR1',
        'new_abbrev': false,
        'abbrev': '',
        'name': 'Deuteronomistic Redactor 1'
    },
    {
        'date': 550,
        'old_abbrev': 'DtIsa',
        'new_abbrev': false,
        'abbrev': '',
        'name': 'Deutero-Isaiah (\'Cyrus Edition\')'
    },
    {
        'date': 550,
        'old_abbrev': 'JerDtr1',
        'new_abbrev': false,
        'abbrev': '',
        'name': 'Jeremiah Deuteronomistic Redaction 1'
    },
    {
        'date': 545,
        'old_abbrev': 'EzekR-Golah',
        'new_abbrev': false,
        'abbrev': '',
        'name': 'Ezekiel Golah Redaction'
    },
    {
        'date': 545,
        'old_abbrev': 'Four Prophets Redaction',
        'new_abbrev': true,
        'abbrev': 'FPR',
        'name': 'Four Prophets Redaction'
    },
    {
        'date': 540,
        'old_abbrev': 'JerDtr2',
        'new_abbrev': false,
        'abbrev': '',
        'name': 'Jeremiah Deuteronomistic Redaction 2'
    },
    {
        'date': 535,
        'old_abbrev': 'ExodDtr',
        'new_abbrev': false,
        'abbrev': '',
        'name': 'Exodus story proper'
    },
    {
        'date': 530,
        'old_abbrev': 'MicahR1',
        'new_abbrev': true,
        'abbrev': 'MicR1',
        'name': 'Micah Redactor 1'
    },
    {
        'date': 530,
        'old_abbrev': 'PG',
        'new_abbrev': false,
        'abbrev': '',
        'name': 'Priestly Grundschrift'
    },
    {
        'date': 525,
        'old_abbrev': 'ZephR1',
        'new_abbrev': false,
        'abbrev': '',
        'name': 'Zephaniah Redactor 1'
    },
    {
        'date': 525,
        'old_abbrev': 'Various Additions to Genesis',
        'new_abbrev': true,
        'abbrev': 'VarGen',
        'name': 'Various Additions to Genesis (Documentary)'
    },
    {
        'date': 521,
        'old_abbrev': 'DtIsaE1',
        'new_abbrev': false,
        'abbrev': '',
        'name': 'Deutero-Isaiah Edition 1 (\'Darius Edition\')'
    },
    {
        'date': 521,
        'old_abbrev': 'HabR1',
        'new_abbrev': false,
        'abbrev': '',
        'name': 'Habakkuk Redactor 1'
    },
    {
        'date': 520,
        'old_abbrev': 'JerDtr3',
        'new_abbrev': false,
        'abbrev': '',
        'name': 'Jeremiah Deuteronomistic Redaction 3'
    },
    {
        'date': 520,
        'old_abbrev': 'Temple Priests Redaction',
        'new_abbrev': true,
        'abbrev': 'TPR',
        'name': 'Temple Priests Redaction'
    },
    {
        'date': 520,
        'old_abbrev': 'Haggai',
        'new_abbrev': true,
        'abbrev': 'Hag',
        'name': 'Haggai'
    },
    {
        'date': 520,
        'old_abbrev': 'First Zechariah',
        'new_abbrev': true,
        'abbrev': 'Zech1',
        'name': 'First Zechariah (Synchronic)'
    },
    {
        'date': 515,
        'old_abbrev': 'DtIsaE1R',
        'new_abbrev': false,
        'abbrev': '',
        'name': 'Deutero-Isaiah Scholastic Redaction'
    },
    {
        'date': 510,
        'old_abbrev': 'Servant Song Redactor',
        'new_abbrev': true,
        'abbrev': 'SSR',
        'name': 'Servant Song Redactor'
    },
    {
        'date': 500,
        'old_abbrev': 'GenR1',
        'new_abbrev': false,
        'abbrev': '',
        'name': 'First Supplementary Layer in Genesis'
    },
    {
        'date': 500,
        'old_abbrev': 'HosR2',
        'new_abbrev': false,
        'abbrev': '',
        'name': 'Hosea Redactor 2'
    },
    {
        'date': 500,
        'old_abbrev': 'AmosR3',
        'new_abbrev': true,
        'abbrev': 'AmR3',
        'name': 'Amos Redactor 3'
    },
    {
        'date': 500,
        'old_abbrev': 'R (Redactor)',
        'new_abbrev': true,
        'abbrev': 'R-Doc',
        'name': 'Redactor (Documentary)'
    },
    {
        'date': 475,
        'old_abbrev': 'Third Isaiah',
        'new_abbrev': true,
        'abbrev': 'Isa3',
        'name': 'Third Isaiah (Synchronic)'
    },
    {
        'date': 475,
        'old_abbrev': 'DtrR2',
        'new_abbrev': false,
        'abbrev': '',
        'name': 'Deuteronomistic Redactor 2'
    },
    {
        'date': 475,
        'old_abbrev': 'RP',
        'new_abbrev': false,
        'abbrev': '',
        'name': 'Priestly Redactor'
    },
    {
        'date': 475,
        'old_abbrev': 'HabR2',
        'new_abbrev': false,
        'abbrev': '',
        'name': 'Habakkuk Redactor 2'
    },
    {
        'date': 475,
        'old_abbrev': 'L',
        'new_abbrev': false,
        'abbrev': '',
        'name': 'Levitical Source'
    },
    {
        'date': 475,
        'old_abbrev': 'DtIsaE2',
        'new_abbrev': false,
        'abbrev': '',
        'name': 'Deutero-Isaiah Edition 2'
    },
    {
        'date': 475,
        'old_abbrev': 'MicahR2',
        'new_abbrev': true,
        'abbrev': 'MicR2',
        'name': 'Micah Redactor 2'
    },
    {
        'date': 475,
        'old_abbrev': 'Job',
        'new_abbrev': false,
        'abbrev': '',
        'name': 'Job (Synchronic)'
    },
    {
        'date': 450,
        'old_abbrev': 'Second Zechariah',
        'new_abbrev': true,
        'abbrev': 'Zech2',
        'name': 'Second Zechariah (Synchronic)'
    },
    {
        'date': 450,
        'old_abbrev': 'Post-DtrR',
        'new_abbrev': false,
        'abbrev': '',
        'name': 'Post-Deuteronomistic Redactor'
    },
    {
        'date': 450,
        'old_abbrev': 'Late Jer Dtr additions',
        'new_abbrev': true,
        'abbrev': 'LateJerDtr',
        'name': 'Late Deuteronomistic Additions to Jeremiah'
    },
    {
        'date': 450,
        'old_abbrev': 'Book of Tweve Redaction',
        'new_abbrev': true,
        'abbrev': 'TwelveR',
        'name': 'Book of Twelve Redaction'
    },
    {
        'date': 450,
        'old_abbrev': 'ZephR2',
        'new_abbrev': false,
        'abbrev': '',
        'name': 'Zephaniah Redactor 2'
    },
    {
        'date': 450,
        'old_abbrev': 'HS (Holiness School)',
        'new_abbrev': false,
        'abbrev': 'HS',
        'name': 'Holiness School'
    },
    {
        'date': 425,
        'old_abbrev': 'ExR',
        'new_abbrev': false,
        'abbrev': '',
        'name': 'Exodus Redactor'
    },
    {
        'date': 425,
        'old_abbrev': 'Various Non-P Additions',
        'new_abbrev': true,
        'abbrev': 'VarNonP',
        'name': 'Various Non-P Additions'
    },
    {
        'date': 420,
        'old_abbrev': 'Malachi',
        'new_abbrev': false,
        'abbrev': '',
        'name': 'Malachi (Synchronic)'
    },
    {
        'date': 415,
        'old_abbrev': 'David Saga',
        'new_abbrev': false,
        'abbrev': '',
        'name': 'David Saga'
    },
    {
        'date': 400,
        'old_abbrev': 'Psalms 90-150',
        'new_abbrev': true,
        'abbrev': 'Ps 90-150',
        'name': 'Psalms 90-150 (Synchronic)'
    },
    {
        'date': 400,
        'old_abbrev': 'LateDtIsaR',
        'new_abbrev': false,
        'abbrev': '',
        'name': 'Late Deutero-Isaiah Redactor'
    },
    {
        'date': 400,
        'old_abbrev': 'EzekR-Diaspora',
        'new_abbrev': false,
        'abbrev': '',
        'name': 'Ezekiel Diaspora Redaction'
    },
    {
        'date': 400,
        'old_abbrev': 'Joel',
        'new_abbrev': false,
        'abbrev': '',
        'name': 'Joel'
    },
    {
        'date': 400,
        'old_abbrev': 'MicahR3',
        'new_abbrev': false,
        'abbrev': '',
        'name': 'Micah Redactor 3'
    },
    {
        'date': 400,
        'old_abbrev': 'GenR2',
        'new_abbrev': false,
        'abbrev': '',
        'name': 'Second Supplementary Layer in Genesis'
    },
    {
        'date': 390,
        'old_abbrev': 'Various Late Additions to Genesis',
        'new_abbrev': true,
        'abbrev': 'VarLateGen',
        'name': 'Various Late Additions to Genesis'
    },
    {
        'date': 375,
        'old_abbrev': 'Late Additions to Samuel',
        'new_abbrev': true,
        'abbrev': 'LateAddSam',
        'name': 'Late Additions to Samuel'
    },
    {
        'date': 375,
        'old_abbrev': 'HexR',
        'new_abbrev': false,
        'abbrev': '',
        'name': 'Hexateuch Redaction'
    },
    {
        'date': 360,
        'old_abbrev': 'Final DtrH',
        'new_abbrev': false,
        'abbrev': '',
        'name': 'Final Deuteronomistic History'
    },
    {
        'date': 350,
        'old_abbrev': 'PentR',
        'new_abbrev': false,
        'abbrev': '',
        'name': 'Pentateuch Redaction'
    },
    {
        'date': 350,
        'old_abbrev': 'Late Post-DtrR',
        'new_abbrev': false,
        'abbrev': '',
        'name': 'Late Post-Deuteronomistic Redaction'
    },
    {
        'date': 340,
        'old_abbrev': 'Joel',
        'new_abbrev': true,
        'abbrev': 'Jo',
        'name': 'Joel (Synchronic)'
    },
    {
        'date': 330,
        'old_abbrev': 'PostDtrJer',
        'new_abbrev': false,
        'abbrev': '',
        'name': 'Post-Deuteronomistic Jeremiah'
    },
    {
        'date': 330,
        'old_abbrev': 'Independent Oracles',
        'new_abbrev': false,
        'abbrev': '',
        'name': 'Independent Oracles'
    },
    {
        'date': 325,
        'old_abbrev': 'Chronicles',
        'new_abbrev': true,
        'abbrev': 'Chr',
        'name': 'Chronicles'
    },
    {
        'date': 325,
        'old_abbrev': 'Esther',
        'new_abbrev': true,
        'abbrev': 'Esther',
        'name': 'Esther'
    },
    {
        'date': 320,
        'old_abbrev': 'Nehemiah',
        'new_abbrev': true,
        'abbrev': 'Neh',
        'name': 'Nehemiah (Synchronic)'
    },
    {
        'date': 310,
        'old_abbrev': 'EzekR3',
        'new_abbrev': false,
        'abbrev': '',
        'name': 'Ezekiel Redactor 3'
    },
    {
        'date': 300,
        'old_abbrev': 'Ezra',
        'new_abbrev': true,
        'abbrev': 'Ezra',
        'name': 'Ezra'
    },
    {
        'date': 300,
        'old_abbrev': 'Song of Songs',
        'new_abbrev': true,
        'abbrev': 'Song',
        'name': 'Song of Songs (Synchronic)'
    },
    {
        'date': 300,
        'old_abbrev': 'Ruth',
        'new_abbrev': false,
        'abbrev': '',
        'name': 'Ruth'
    },
    {
        'date': 300,
        'old_abbrev': 'Ecclesiastes',
        'new_abbrev': true,
        'abbrev': 'Eccl',
        'name': 'Ecclesiastes (Synchronic)'
    },
    {
        'date': 275,
        'old_abbrev': 'Jonah',
        'new_abbrev': false,
        'abbrev': '',
        'name': 'Jonah'
    },
    {
        'date': 275,
        'old_abbrev': 'Various Late Additions to Exodus',
        'new_abbrev': true,
        'abbrev': 'VarLateEx',
        'name': 'Various Late Additions to Exodus'
    },
    {
        'date': 200,
        'old_abbrev': 'Esther',
        'new_abbrev': false,
        'abbrev': '',
        'name': 'Esther'
    },
    {
        'date': 164,
        'old_abbrev': 'Daniel',
        'new_abbrev': true,
        'abbrev': 'Dan',
        'name': 'Daniel (Synchronic)'
    }
] as Period[];
