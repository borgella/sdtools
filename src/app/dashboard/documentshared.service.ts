import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { ISummary } from 'app/model/summary/isummary';
import { Summary } from 'app/model/summary/summary';
import { IserviceDoc } from 'app/model/documentation/iservicedoc';
import { IOrganisation } from 'app/model/organisation/iorganisation';
import { DocumentService } from 'app/services/document.service';
import { Observable } from 'rxjs/Observable';
import { IServiceDocumentation } from 'app/model/service/iservicedoc';

@Injectable()
export class DocumentsharedService implements IServiceDocumentation {

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
    this.documentSer.getDocument(idDoc).subscribe((document: IserviceDoc) => {
      this.document = document;
      this.subjectDocument.next(this.document);
    });
  }

  public getSummaries(): void {
    this.documentSer.getSummaries().subscribe((summaries: Array<ISummary>) => {
      this.summaries = summaries;
      this.subjectSummaries.next(this.summaries);
    });
  }

  public getSingleSummary(id: string): void {
    this.documentSer.getSingleSummary(id).subscribe((summary: ISummary) => {
      this.summary = summary;
      this.subjectSummary.next(this.summary);
    });
  }

  public getAllOrganisations(): void {
     this.documentSer.getAllOrganisations().subscribe((organisations: Array<IOrganisation>) => {
       this.organisations = organisations;
       this.subjectOrganisations.next(this.organisations);
     });
  }

  public getSummariesForAnOrganisation(id: string): void {
    this.documentSer.getSummariesForAnOrganisation(id).subscribe((summaries: Array<ISummary>) => {
      this.summaries = summaries;
      this.subjectSummaries.next(this.summaries);
    });
  }

}
