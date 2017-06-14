import { Injectable } from '@angular/core';
import { ISummary } from 'app/model/summary/isummary';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IserviceDoc } from 'app/model/documentation/iservicedoc';
import { IOrganisation } from 'app/model/organisation/iorganisation';
import { Summaries } from 'app/mock/summaries';
import { Organisations } from 'app/mock/organisations';
import { Documents } from 'app/mock/documents';

@Injectable()
export class DocumentService {

  private summaries2: Array<ISummary> = Summaries;
  private organisations: Array<IOrganisation> = Organisations;
  private documents: Array<IserviceDoc> = Documents;


  public constructor(private _http: Http) { }

  public getSummaries(): Array<ISummary> {
    return this.summaries2;
  }

  public getDocument(idDoc: string): IserviceDoc {
    const temp = this.documents.filter((document: IserviceDoc) => {
      if (document._id === idDoc) {
        return document;
      }
    });
    if (temp) {
      return temp[0];
    }
  }

  public getSingleSummary(id: string): ISummary {
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

  public getSummariesForAnOrganisation(id: string): Array<ISummary> {
    const is = id === '1';
    if (is) {
      return this.getPrductionsSummaries();
    } else {
      return this.getOtherOrganisationSummaries();
    }
  }

  public getPrductionsSummaries(): Array<ISummary> {
    const temp = this.summaries2.filter((summary: ISummary) => {
      if (summary.isProd) {
        return summary;
      }
    });
    if (temp) {
      return temp;
    }
  }

  public getOtherOrganisationSummaries(): Array<ISummary> {
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
