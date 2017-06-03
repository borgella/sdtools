import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { ISummary } from 'app/model/summary/isummary';
import { Observable } from 'rxjs/Observable';
import { Summary } from 'app/model/summary/summary';

@Injectable()
export class CommunicationService {
  public subject = new Subject();
  public summary: ISummary;

  constructor() { }

 emitData(value: ISummary) {
    return this.subject.next(value);
 }

 receiveData(): ISummary {
    this.subject.subscribe((data: ISummary) => {
      this.summary = data;
   });
   return this.summary;
 }

}
