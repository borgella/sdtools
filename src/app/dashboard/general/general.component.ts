import { Component, OnInit } from '@angular/core';
import { ISummary } from 'app/model/summary/isummary';
import { DocumentService } from 'app/document.service';
import { CommunicationService } from 'app/communication.service';
import { Router } from '@angular/router';
import { DocumentsharedService } from 'app/dashboard/documentshared.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  private summaries: Array<ISummary>;
  private summary: ISummary;

  constructor(private _documentService: DocumentService, private shareDoc: DocumentsharedService) { }

  public ngOnInit(): void {
    this.summaries = this.shareDoc.summaries;
  }

  public viewSingleSummary(id: string): void {
    this.summary = this._documentService.singleSummary(id);
  }

}
