import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { ISummary } from 'app/model/isummary';

@Injectable()
export class CommunicationService {
  public subject: Subject<ISummary> = new Subject();

  constructor() { }

}
