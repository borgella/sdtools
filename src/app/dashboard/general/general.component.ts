import { Component, OnInit } from '@angular/core';
import { ISummary } from 'app/model/summary/isummary';
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

  constructor(private shareDoc: DocumentsharedService) { }

  public ngOnInit(): void {
    this.shareDoc.getSummaries();
    this.summaries = this.shareDoc.summaries;
    console.log(this.summaries);
  }

  public viewSingleSummary(id: string): void {
    this.summary = this.shareDoc.summary;
    console.log(this.summary);
  }

}
