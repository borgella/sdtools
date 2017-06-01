
import { ISummary } from 'app/model/isummary';

export class Summary implements ISummary {
    _id: string;
    name: string;
    description: string;

    public constructor(_id: string, name: string, descrption: string) { 
        this._id = _id;
        this.name = name;
        this.description = descrption;
    }

    public getId() { return this._id; }

    public getName() { return this.name; }

    public getDescription() { return this.description; }

}
