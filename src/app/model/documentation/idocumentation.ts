import { Organisation } from 'app/model/documentation/iorganisation';
import { IserviceDoc } from 'app/model/documentation/iservicedoc';

export interface IDocumentation {
    'organisations': Array<Organisation>;
    'serviceDoc': IserviceDoc;
}
