import { Component, OnInit, OnDestroy } from '@angular/core';
import { ISummary } from 'app/model/summary/isummary';
import { CommunicationService } from 'app/communication.service';
import { Router } from '@angular/router';
import { DocumentsharedService } from 'app/dashboard/documentshared.service';
import 'rxjs/add/operator/takeWhile';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit, OnDestroy {

  private summaries: Array<ISummary>;
  private summary: ISummary;
  private isAlive = true;

  constructor(private shareDoc: DocumentsharedService) { }

  public ngOnInit(): void {
    this.shareDoc.getSummaries();
    this.summaries = this.shareDoc.summaries;
    this.shareDoc.subjectSummaries.takeWhile(() => { // a refactorer pour utiliser flatMap
        return this.isAlive;
    }).subscribe((summaries: Array<ISummary>) => {
        this.summaries = summaries;
      });
  }

  public ngOnDestroy(): void {
    this.isAlive = false;
    console.log(this.summaries);
  }

}
