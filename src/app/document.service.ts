import { Injectable } from '@angular/core';
import { ISummary } from 'app/model/isummary';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DocumentService {
  private summaries: Array<ISummary>;
  private summaries2: Array<ISummary> = [ {_id: '1', name: 'Contract retreive Service', description: 'toto'},
    { _id: '2', name: 'client Service', description: 'tata' }, { _id: '3', name: 'Contract conversion Service', description: ' version' },
    { _id: '4', name: 'un autre Service', description: 'tata' }, { _id: '5', name: 'Contract retreive Service', description: 'tata' },
    { _id: '2', name: 'Contract retreive Service', description: 'tata' }, { _id: '7', name: 'Contract Service', description: 'tata' },
    { _id: '8', name: 'Contract retreive Service', description: 'tata' }, { _id: '9', name: 'ccs rules Service', description: 'tata' },
    { _id: '10', name: 'Contract Service', description: 'tata' }, { _id: '11', name: 'SAS Service', description: 'tata' },
    { _id: '12', name: 'Contract Service', description: 'tata' }, { _id: '13', name: 'Contract retreive Service', description: 'tata' },
  ];


  constructor( private _http: Http) { }

  public getSummaries(): Array<ISummary> {

      return this.summaries2;

  }

  public singleSummary(id: string): ISummary {
     const oj = this.summaries2.filter(function(obj: ISummary){
      if (obj._id === id) {
        return obj;
      }
    });
    if (oj.length > 0) {
      return oj[0];
    }
  }
}
