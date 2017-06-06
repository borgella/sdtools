import { IIdentity } from 'app/model/documentation/iidentity';
import { IScm } from 'app/model/documentation/iscm';
import { IOwnerShip } from 'app/model/documentation/iownership';

export interface IserviceDoc {
    '_id': string;
    'serviceDoc': {
        'ownership': IOwnerShip,
        'identity': IIdentity;
        'scm': IScm;
        'mapProductionVersions': Array<{}>;
        'mapProjectVersions': Array<{}>;
        'isProduction': boolean;
        'isD16': boolean;
    };
}
