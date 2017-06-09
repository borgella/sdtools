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
  private summary: ISummary = new Summary();

  constructor(private route: ActivatedRoute, private docService: DocumentService, private shared: DocumentsharedService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.document = this.docService.getDocument(params['id']);
      this.shared.document = this.document;
      console.log(this.document);
    });
  }


}
