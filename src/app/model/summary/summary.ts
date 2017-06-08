import { ISummary } from 'app/model/summary/isummary';

export class Summary implements ISummary {
    '_id': string;
    'name': string;
    'description': string;
    'isProd': boolean;
    'isD16': boolean;
    'isD14': boolean;
    'isOther': boolean;

    public constructor() {
        this._id = '';
        this.name = '';
        this.description = '';
        this.isProd = this.isD16 = this.isD14 = this.isOther = false;
    }

    public getId() { return this._id; }

    public getName() { return this.name; }

    public getDescription() { return this.description; }

}
