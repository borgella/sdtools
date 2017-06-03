import { IIdentity } from 'app/model/documentation/iidentity';
import { IScm } from 'app/model/documentation/iscm';

export interface IserviceDoc {
    'identity': IIdentity;
    'scm': IScm;
    'mapProductionVersions': Array<{}>;
    'mapProjectVersions': Array<{}>;
}
