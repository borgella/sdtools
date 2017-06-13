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

  public getSummaries(): void {
    this.summaries = this.documentSer.getSummaries();
    this.subjectSummaries.next(this.summaries);
    this.subjectSummaries.subscribe((summaries: Array<ISummary>) => {
      this.summaries = summaries;
    });
  }

  public getDocument(idDoc: string): void {
    this.document = this.documentSer.getDocument(idDoc);
    this.subjectDocument.next(this.document);
    this.subjectDocument.subscribe((doc: IserviceDoc) => {
      this.document = doc;
    });

  }

  public getSingleSummary(id: string): void {
    this.summary = this.documentSer.getSingleSummary(id);
    this.subjectSummary.next(this.summary);
    this.subjectSummary.subscribe((summary: ISummary) => {
      this.summary = summary;
    });
  }

  public getAllOrganisations(): void {
    this.organisations = this.documentSer.getAllOrganisations();
    this.subjectOrganisations.next(this.organisations);
    this.subjectOrganisations.subscribe((organisations: Array<IOrganisation>) => {
      this.organisations = organisations;
    });
  }

  public getOneOrganisation(id: string): void {
    this.organisation = this.documentSer.getOneOrganisation(id);
    this.subjectOrganisation.next(this.organisation);
    this.subjectOrganisation.subscribe((organisation: IOrganisation) => {
      this.organisation = organisation;
    });
  }

  public getDocumentsForAnOrganisation(id: string): void {
    this.summaries = this.documentSer.getDocumentsForAnOrganisation(id);
    this.subjectSummaries.next(this.summaries);
    this.subjectSummaries.subscribe((summaries: Array<ISummary>) => {
      this.summaries = summaries;
    });
  }

  public getPrductionsSummaries(): void{
    this.summaries = this.documentSer.getPrductionsSummaries();
    this.subjectSummaries.next(this.summaries);
    this.subjectSummaries.subscribe((summaries: Array<ISummary>) => {
      this.summaries = summaries;
    });
  }

  public getOtherOrganisationSummaries(): void {
    this.summaries = this.documentSer.getOtherOrganisationSummaries();
    this.subjectSummaries.next(this.summaries);
    this.subjectSummaries.subscribe((summaries: Array<ISummary>) => {
      this.summaries = summaries;
    });
  }
}
