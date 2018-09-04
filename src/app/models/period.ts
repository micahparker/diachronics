import * as _ from 'lodash';

export default class Period {
    name: string;
    abbrev: string;
    old_abbrev: string;
    new_abbrev: boolean;
    color_text: string;
    color_bg?: string;
    date: number;

    constructor(data?: any) {
        if (data) {
            this.name = data['Full name'];
            this.abbrev = data['IF yes_x003a_ CHANGE TO'] || data['Current Dataset Abbreviation'] || this.name;
            this.old_abbrev = data['Current Dataset Abbreviation'];
            this.new_abbrev = (data['CHANGE? (y/n)'] === 'y');
            this.date = _.parseInt(data['Period (all BCE)']);
        }
    }
}