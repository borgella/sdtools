
export let Documents = [{
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
                        'dateCreation': new Date(1995, 11, 17),
                        'dateLastModification': new Date(2016, 12, 21),
                    },
                    {
                        'id': 'rule retrieve-contract #2',
                        'endpointId': 'retrieve-contract',
                        'context': 'For Requestor CLAR',
                        // tslint:disable-next-line:max-line-length
                        'text': 'For criteria of type IRetrieveClassicContractCriteria and Requestor = CLAR, the code is handled by LegacyRetrieveClassicContractEndpointHandler.',
                        'dateCreation': new Date(),
                        'dateLastModification': null
                    },
                    {
                        'id': 'rule retrieve-contract #3',
                        'endpointId': 'retrieve-contract',
                        'context': 'For Requestor CLAR',
                        // tslint:disable-next-line:max-line-length
                        'text': 'For criteria of type IRetrieveClassicContractCriteria and Requestor = CLAR, the code is handled by LegacyRetrieveClassicContractEndpointHandler.',
                        'dateCreation': new Date(2014, 3, 17),
                        'dateLastModification': null
                    },
                    {
                        'id': 'rule retrieve-contract #4',
                        'endpointId': 'retrieve-contract',
                        'context': 'For all Requestor except CLAR',
                        // tslint:disable-next-line:max-line-length
                        'text': 'For criteria of type IRetrieveClassicContractCriteria and other requestors than CLAR, the code is handled by RetrieveClassicContractEndpointHandler.',
                        'dateCreation': new Date(2012, 11, 17),
                        'dateLastModification': null
                    }
                ],
                'usesDependencies': [],
                'usedByDependencies': [],
                'dateCreation': new Date(2015, 11, 17),
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
