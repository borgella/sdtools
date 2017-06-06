import { Injectable } from '@angular/core';
import { ISummary } from 'app/model/summary/isummary';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IserviceDoc } from 'app/model/documentation/iservicedoc';
import { IOrganisation } from 'app/model/organisation/iorganisation';

@Injectable()
export class DocumentService {
  private summaries2: Array<ISummary> = [{ _id: '1', name: 'Contract retreive Service', description: 'toto' },
  { _id: '2', name: 'client Service', description: 'tata' }, { _id: '3', name: 'Contract conversion Service', description: ' version' },
  { _id: '4', name: 'un autre Service', description: 'tata' }, { _id: '5', name: 'Contract retreive Service', description: 'tata' },
  { _id: '2', name: 'Contract retreive Service', description: 'tata' }, { _id: '7', name: 'Contract Service', description: 'tata' },
  { _id: '8', name: 'Contract retreive Service', description: 'tata' }, { _id: '9', name: 'ccs rules Service', description: 'tata' },
  { _id: '10', name: 'Contract Service', description: 'tata' }, { _id: '11', name: 'SAS Service', description: 'tata' },
  { _id: '12', name: 'Contract Service', description: 'tata' }, { _id: '13', name: 'Contract retreive Service', description: 'tata' },
  ];

  private organisations: Array<IOrganisation> = [
    {
      '_id': '1',
      'name': 'PRODUCTION',
      'servicesId': ['5923957742481a1cf8dd9b50'],
      'dateBegin': '2017-05-23T01:50:47.640Z',
      'dateEnd': '2018-05-23T01:50:47.640Z'
    },
    {
      '_id': '2',
      'name': 'CONTACT_D16',
      'servicesId': [],
      'dateBegin': '2017-05-23T01:50:47.640Z',
      'dateEnd': '2018-05-23T01:50:47.640Z'
    },
    {
      '_id': '3',
      'name': 'CONTACT_D14',
      'servicesId': [],
      'dateBegin': '2017-05-23T01:50:47.640Z',
      'dateEnd': '2018-05-23T01:50:47.640Z'
    },
    {
      '_id': '4',
      'name': 'Production DOM 6.5',
      'servicesId': [],
      'dateBegin': '2017-05-25T19:04:26.538Z',
      'dateEnd': null
    }
  ];

  private summary: Array<IserviceDoc> = [{
    '_id': '5923957742481a1cf8dd9b50',
    'serviceDoc': {
      'identity': {
        'name': 'Contract Repository Service',
        'domain': 'plpolicy',
        'subDomain': 'entity'
      },
      'ownership': {
        'site': '2020',
        'team': 'CE-Core'
      },
      'scm': {
        'resourceScm': {
          'siteArea': 'soa-resources-area',
          'groupId': 'intact.soa-resources',
          'artefactId': 'crs-resources'
        },
        'messageScm': {
          'siteArea': 'soa-resources-area',
          'groupId': 'intact.soa-resources',
          'artefactId': 'crs-resources'
        },
        'serviceEndPointScm': {
          'siteArea': 'soa-resources-area',
          'groupId': 'intact.soa-resources',
          'artefactId': 'crs-resources'
        },
        'serviceEarScm': {
          'siteArea': 'soa-resources-area',
          'groupId': 'intact.soa-resources',
          'artefactId': 'crs-resources'
        },
        'serviceScm': {
          'siteArea': 'soa-resources-area',
          'groupId': 'intact.soa-resources',
          'artefactId': 'crs-resources'
        },
        'consumerScm': {
          'siteArea': 'soa-resources-area',
          'groupId': 'intact.soa-resources',
          'artefactId': 'crs-resources'
        }
      },
      'mapProductionVersions': [
        {
          'idVersion': '59272abaf0c55fbbac4ae758',
          'serviceDocId': {
            'type': null,
            'ref': 'ServiceDoc',
            'required': true
          },
          'branchId': '59272abaf0c55fbbac4ae758',
          'productionBranchId': null,
          'urlConfigChecker': 'https://uat-ms-plpolicy1-soa-u.iad.ca.inet:12000/ContractRepositoryService/',
          'urlWsdl': 'https://uat-ms-plpolicy1-soa-u.iad.ca.inet:12000/ContractRepositoryService/RetrieveContract?wsdl',
          'urlScm': null,
          'endpoints': [
            {
              'id': 'copy-contract',
              'name': 'CopyContract',
              'inputs': [
                {
                  'id': 'criteria',
                  'name': 'Criteria',
                  'type': 'Selection criteria',
                  'multiplicity': '1'
                }
              ],
              'outputs': [
                {
                  'id': 'copied-contract',
                  'name': 'Contract',
                  'type': 'ContractVersion',
                  'multiplicity': '1'
                }
              ]
            },
            {
              'id': 'retrieve-contract',
              'name': 'RetrieveContract',
              'inputs': [
                {
                  'id': 'requestor',
                  'name': 'Requestor',
                  'type': 'Requestor Code Value',
                  'multiplicity': '1'
                },
                {
                  'id': 'criteria',
                  'name': 'Criteria',
                  'type': 'Selection criteria',
                  'multiplicity': '1'
                }
              ],
              'outputs': [
                {
                  'id': 'retrieved-contract',
                  'name': 'Contract',
                  'type': 'ContractVersion',
                  'multiplicity': '1'
                }
              ]
            },
            {
              'id': 'search-contract',
              'name': 'SearchContract',
              'inputs': [
                {
                  'id': 'criteria',
                  'name': 'Criteria',
                  'type': 'Selection criteria',
                  'multiplicity': '1 à plusieurs'
                }
              ],
              'outputs': [
                {
                  'id': 'retrieved-contract',
                  'name': 'Contract',
                  'type': 'ContractVersion Summary',
                  'multiplicity': '1 à plusieurs'
                },
                {
                  'id': 'results-number',
                  'name': 'Results number',
                  'type': 'Integer',
                  'multiplicity': '1'
                },
                {
                  'id': 'cpt-auth',
                  'name': 'Authorization counters',
                  'type': 'Integer',
                  'multiplicity': '1 à plusieurs'
                }
              ]
            }
          ],
          'specifications': [
            {
              'id': 'rule retrieve-contract #1',
              'endpointId': 'retrieve-contract',
              'context': 'By default',
              'text': 'By default, all requests are handled by searching in Contact PL Database.',
              'dateCreation': null,
              'dateLastModification': null
            },
            {
              'id': 'rule retrieve-contract #2',
              'endpointId': 'retrieve-contract',
              'context': 'For Requestor CLAR',
              // tslint:disable-next-line:max-line-length
              'text': 'For criteria of type IRetrieveClassicContractCriteria and Requestor = CLAR, the code is handled by LegacyRetrieveClassicContractEndpointHandler.',
              'dateCreation': null,
              'dateLastModification': null
            },
            {
              'id': 'rule retrieve-contract #3',
              'endpointId': 'retrieve-contract',
              'context': 'For Requestor CLAR',
              // tslint:disable-next-line:max-line-length
              'text': 'For criteria of type IRetrieveClassicContractCriteria and Requestor = CLAR, the code is handled by LegacyRetrieveClassicContractEndpointHandler.',
              'dateCreation': null,
              'dateLastModification': null
            },
            {
              'id': 'rule retrieve-contract #4',
              'endpointId': 'retrieve-contract',
              'context': 'For all Requestor except CLAR',
              // tslint:disable-next-line:max-line-length
              'text': 'For criteria of type IRetrieveClassicContractCriteria and other requestors than CLAR, the code is handled by RetrieveClassicContractEndpointHandler.',
              'dateCreation': null,
              'dateLastModification': null
            }
          ],
          'usesDependencies': [],
          'usedByDependencies': [],
          'dateCreation': null,
          'dateLastModification': null
        }
      ],
      'mapProjectVersions': [
        {
          'idVersion': '5923957742481a1cf8dd9b50',
          'serviceDocId': {
            'type': '5923957742481a1cf8dd9b50',
            'ref': 'ServiceDoc',
            'required': true
          },
          'branchId': '5923957742481a1cf8dd9b50',
          'productionBranchId': '59272abaf0c55fbbac4ae758',
          'urlConfigChecker': 'https://dev-ms-plpolicy1-soa-u.iad.ca.inet:12000/ContractRepositoryService/',
          'urlWsdl': 'https://dev-ms-plpolicy1-soa-u.iad.ca.inet:12000/ContractRepositoryService/RetrieveContract?wsdl',
          'urlScm': null,
          'endpoints': [
            {
              'id': 'copy-contract',
              'name': 'CopyContract',
              'inputs': [
                {
                  'id': 'criteria',
                  'name': 'Criteria',
                  'type': 'Selection criteria',
                  'multiplicity': '1'
                }
              ],
              'outputs': [
                {
                  'id': 'copied-contract',
                  'name': 'Contract',
                  'type': 'ContractVersion',
                  'multiplicity': '1'
                }
              ]
            },
            {
              'id': 'retrieve-contract',
              'name': 'RetrieveContract',
              'inputs': [
                {
                  'id': 'requestor',
                  'name': 'Requestor',
                  'type': 'Requestor Code Value',
                  'multiplicity': '1'
                },
                {
                  'id': 'criteria',
                  'name': 'Criteria',
                  'type': 'Selection criteria',
                  'multiplicity': '1'
                }
              ],
              'outputs': [
                {
                  'id': 'retrieved-contract',
                  'name': 'Contract',
                  'type': 'ContractVersion',
                  'multiplicity': '1'
                }
              ]
            },
            {
              'id': 'search-contract',
              'name': 'SearchContract',
              'inputs': [
                {
                  'id': 'criteria',
                  'name': 'Criteria',
                  'type': 'Selection criteria',
                  'multiplicity': '1 à plusieurs'
                }
              ],
              'outputs': [
                {
                  'id': 'retrieved-contract',
                  'name': 'Contract',
                  'type': 'ContractVersion Summary',
                  'multiplicity': '1 à plusieurs'
                },
                {
                  'id': 'results-number',
                  'name': 'Results number',
                  'type': 'Integer',
                  'multiplicity': '1'
                },
                {
                  'id': 'cpt-auth',
                  'name': 'Authorization counters',
                  'type': 'Integer',
                  'multiplicity': '1 à plusieurs'
                }
              ]
            }
          ],
          'specifications': [
            {
              'id': 'rule retrieve-contract #1',
              'endpointId': 'retrieve-contract',
              'context': 'By default',
              // tslint:disable-next-line:max-line-length
              'text': 'By default, all requests are handled by searching in Contact PL Database. Note: (Conversion Project Modification) By specifying true in the Boolean field IncludeDeletedTransaction of a RetrieveContractVersionCriteria or RetrieveLatestContractVersionFromContractUUIDCriteria, this endpoint could return deleted contract version from Contact PL database.',
              'dateCreation': null,
              'dateLastModification': null
            },
            {
              'id': 'rule retrieve-contract #2',
              'endpointId': 'retrieve-contract',
              'context': 'For Requestor CLAR',
              // tslint:disable-next-line:max-line-length
              'text': 'For criteria of type IRetrieveClassicContractCriteria and Requestor = CLAR, the code is handled by LegacyRetrieveClassicContractEndpointHandler.',
              'dateCreation': null,
              'dateLastModification': null
            },
            {
              'id': 'rule retrieve-contract #3',
              'endpointId': 'retrieve-contract',
              'context': 'For Requestor CLAR',
              // tslint:disable-next-line:max-line-length
              'text': 'For criteria of type IRetrieveClassicContractCriteria and Requestor = CLAR, the code is handled by LegacyRetrieveClassicContractEndpointHandler.',
              'dateCreation': null,
              'dateLastModification': null
            },
            {
              'id': 'rule retrieve-contract #4',
              'endpointId': 'retrieve-contract',
              'context': 'For all Requestor except CLAR',
              // tslint:disable-next-line:max-line-length
              'text': 'For criteria of type IRetrieveClassicContractCriteria and other requestors than CLAR, the code is handled by RetrieveClassicContractEndpointHandler.',
              'dateCreation': null,
              'dateLastModification': null
            },
            {
              'id': 'rule retrieve-contract #5',
              'endpointId': 'retrieve-contract',
              'context': 'For Requestor HCNV (HALCION)',
              // tslint:disable-next-line:max-line-length
              'text': 'For criteria of type IRetrieveHalcionContractCriteria, the code is handled by RetrieveHalcionContractHandler. This is made for Halcion Conversion. The code redirects the call to HalcionIntegrationLayer which calls the corresponding retrieve contract method that will return the Halcion policy in DOM format.',
              'dateCreation': null,
              'dateLastModification': null
            }
          ],
          'usesDependencies': [],
          'usedByDependencies': [],
          'dateCreation': null,
          'dateLastModification': null
        }
      ],
      'isProduction': true,
      'isD16': false
    }
  }];


  constructor(private _http: Http) { }

  public getSummaries(): Array<ISummary> {
    return this.summaries2;
  }

  public singleSummary(id: string): ISummary {
    const temp = this.summaries2.filter(function (obj: ISummary) {
      if (obj._id === id) {
        return obj;
      }
    });
    if (temp.length > 0) {
      return temp[0];
    }
  }

  public getAllOrganisations(): Array<IOrganisation> {
     return this.organisations;
  }

  public getOneOrganisation(id: string): IOrganisation {
    const temp = this.organisations.filter((organisation: IOrganisation) => {
      if (id === organisation._id) {
        return organisation;
      }
    });
    if (temp) {
      return temp[0];
    }
  }


}
