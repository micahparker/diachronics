export interface Period {
    name: string;
    abbrev: string;
    color_text: string;
    color_bg?: string;
    date: number;
    era: string;
}

// tslint:disable:max-line-length
export default [
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
] as Period[];
