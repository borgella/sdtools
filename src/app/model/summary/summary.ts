import { ISummary } from 'app/model/summary/isummary';

export class Summary implements ISummary {
    _id: string;
    name: string;
    description: string;

    public constructor() {
        this._id = '';
        this.name = '';
        this.description = '';
    }

    public getId() { return this._id; }

    public getName() { return this.name; }

    public getDescription() { return this.description; }

}
