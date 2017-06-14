import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { ISummary } from 'app/model/summary/isummary';
import { Summary } from 'app/model/summary/summary';
import { IserviceDoc } from 'app/model/documentation/iservicedoc';
import { IOrganisation } from 'app/model/organisation/iorganisation';
import { DocumentService } from 'app/document.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DocumentsharedService {

  public subjectDocument: Subject<IserviceDoc> = new Subject();
  public subjectSummaries: Subject<Array<ISummary>> = new Subject();
  public subjectSummary: Subject<ISummary> = new Subject();
  public subjectOrganisations: Subject<Array<IOrganisation>> = new Subject();
  public subjectOrganisation: Subject<IOrganisation> = new Subject();

  public document: IserviceDoc;
  public summaries: Array<ISummary> = [];
  public summary: ISummary;
  public organisations: Array<IOrganisation> = [];
  public organisation: IOrganisation;

  constructor(private documentSer: DocumentService) { }

  public getDocument(idDoc: string): void {
    this.document = this.documentSer.getDocument(idDoc);
    this.subjectDocument.next(this.document);
  }

  public getSummaries(): void {
    this.summaries = this.documentSer.getSummaries();
    this.subjectSummaries.next(this.summaries);
  }

  public getSingleSummary(id: string): void {
    this.summary = this.documentSer.getSingleSummary(id);
    this.subjectSummary.next(this.summary);
  }

  public getAllOrganisations(): void {
    this.organisations = this.documentSer.getAllOrganisations();
    this.subjectOrganisations.next(this.organisations);
  }

  public getDocumentsForAnOrganisation(id: string): void {
    this.summaries = this.documentSer.getSummariesForAnOrganisation(id);
    this.subjectSummaries.next(this.summaries);
  }

}
