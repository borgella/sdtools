import { Component, OnInit } from '@angular/core';
import { DocumentsharedService } from 'app/dashboard/documentshared.service';
import { ISummary } from 'app/model/summary/isummary';
import { IserviceDoc } from 'app/model/documentation/iservicedoc';
import 'rxjs/add/operator/takeWhile';

@Component({
  selector: 'app-endpoints',
  templateUrl: './endpoints.component.html',
  styleUrls: ['./endpoints.component.css']
})
export class EndpointsComponent implements OnInit {
  private document: IserviceDoc;
  private endpoints: Array<any>;
  private mapProductionVersions: Array<any> = new Array();

  constructor(private sharedDoc: DocumentsharedService) { }

  public ngOnInit(): void {
    if (this.sharedDoc.document) {
      this.document = this.sharedDoc.document;
      this.mapProductionVersions = this.document.serviceDoc.mapProductionVersions;
      this.endpoints = this.mapProductionVersions[0].endpoints;
    }
  }
}
