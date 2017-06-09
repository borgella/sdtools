import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { ISummary } from 'app/model/summary/isummary';
import { Summary } from 'app/model/summary/summary';
import { IserviceDoc } from 'app/model/documentation/iservicedoc';

@Injectable()
export class DocumentsharedService {

  public subjectSummaries: Subject<Array<ISummary>> = new Subject();
  public summaries: Array<ISummary> = [];
  public subjectDocument: Subject<IserviceDoc> = new Subject();
  public document: IserviceDoc;

  constructor() {
    this.subjectSummaries.subscribe((prod: Array<ISummary>) => {
      console.log(prod);
      this.summaries = prod;
    });
  }
}
