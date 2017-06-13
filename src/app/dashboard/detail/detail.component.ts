import { Component, OnInit } from '@angular/core';
import { ISummary } from 'app/model/summary/isummary';
import { ActivatedRoute, Params } from '@angular/router';
import { DocumentService } from 'app/document.service';
import { CommunicationService } from 'app/communication.service';
import { Summary } from 'app/model/summary/summary';
import { IserviceDoc } from 'app/model/documentation/iservicedoc';
import { DocumentsharedService } from 'app/dashboard/documentshared.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  private document: IserviceDoc;

  constructor(private route: ActivatedRoute, private shareDoc: DocumentsharedService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.shareDoc.getDocument(params['id']);
      this.document = this.shareDoc.document;
      console.log(this.document);
    });
  }


}
