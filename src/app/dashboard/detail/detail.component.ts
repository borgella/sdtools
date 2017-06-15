import { Component, OnInit, OnDestroy } from '@angular/core';
import { ISummary } from 'app/model/summary/isummary';
import { ActivatedRoute, Params } from '@angular/router';
import { DocumentService } from 'app/document.service';
import { CommunicationService } from 'app/communication.service';
import { Summary } from 'app/model/summary/summary';
import { IserviceDoc } from 'app/model/documentation/iservicedoc';
import { DocumentsharedService } from 'app/dashboard/documentshared.service';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnDestroy {

  private document: IserviceDoc;
  private isAlive = true;

  constructor(private route: ActivatedRoute, private shareDoc: DocumentsharedService) { }

  public ngOnInit(): void {
    this.route.params.switchMap(     // i rewrite this with 'paramMap' and the 'get' function in OrganisationDetailComponent
      (params: Params) => {
        this.shareDoc.getDocument(params['id']);
        this.document = this.shareDoc.document;
        return this.shareDoc.subjectDocument.takeWhile(() => this.isAlive);
      }
    ).subscribe((document: IserviceDoc) => {
      this.document = document;
      console.log(this.document);
    });
  }

  ngOnDestroy(): void {
    this.isAlive = false;
  }

}
