import { Injectable } from '@angular/core';
import { ISummary } from 'app/model/summary/isummary';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IserviceDoc } from 'app/model/documentation/iservicedoc';
import { IOrganisation } from 'app/model/organisation/iorganisation';
import { Summaries } from 'app/mock/summaries';
import { Organisations } from 'app/mock/organisations';
import { Documents } from 'app/mock/documents';
import { IServiceDocumentation } from 'app/model/service/iservicedoc';
import { Observer } from 'rxjs/Observer';

@Injectable()
export class DocumentService implements IServiceDocumentation {

  private summaries2: Array<ISummary> = Summaries;
  private organisations: Array<IOrganisation> = Organisations;
  private documents: Array<IserviceDoc> = Documents;


  public constructor(private _http: Http) { }

  public getSummaries(): Observable<Array<ISummary>> {
    return Observable.create((observer: Observer<Array<ISummary>>) => {
      observer.next(this.summaries2);
    });
  }

  public getDocument(idDoc: string): Observable<IserviceDoc> {
    const temp = this.documents.filter((document: IserviceDoc) => {
      if (document._id === idDoc) {
        return document;
      }
    });
    if (temp) {
      return Observable.create((observer: Observer<IserviceDoc>) => {
        observer.next(temp[0]);
      });
    }
  }

  public getSingleSummary(id: string): Observable<ISummary> {
    const temp = this.summaries2.filter(function (obj: ISummary) {
      if (obj._id === id) {
        return obj;
      }
    });
    if (temp.length > 0) {
      return Observable.create((observer: Observer<ISummary>) => {
        observer.next(temp[0]);
      });
    }
  }

  public getAllOrganisations(): Observable<Array<IOrganisation>> {
    return Observable.create((observer: Observer<Array<IOrganisation>>) => {
      observer.next(this.organisations);
    });
  }

  public getSummariesForAnOrganisation(id: string): Observable<Array<ISummary>> {
    const is = id === '1';
    if (is) {
      return Observable.create((observer: Observer<Array<ISummary>>) => {
        observer.next(this.getPrductionsSummaries());
      });
    } else {
      return Observable.create((observer: Observer<Array<ISummary>>) => {
        observer.next(this.getOtherOrganisationSummaries());
      });
    }
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

  private getPrductionsSummaries(): Array<ISummary> {
    const temp = this.summaries2.filter((summary: ISummary) => {
      if (summary.isProd) {
        return summary;
      }
    });
    if (temp) {
      return temp;
    }
  }

  private getOtherOrganisationSummaries(): Array<ISummary> {
    const temp = this.summaries2.filter((summary: ISummary) => {
      if (!summary.isProd) {
        return summary;
      }
    });
    if (temp) {
      return temp;
    }
  }

}
