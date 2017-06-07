import { Component, OnInit } from '@angular/core';
import { ISummary } from 'app/model/summary/isummary';
import { DocumentService } from 'app/document.service';
import { CommunicationService } from 'app/communication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private allSummaries: Array<ISummary>;
  private summary: ISummary;

  constructor(private _documentService: DocumentService, private _communication: CommunicationService, private router: Router) { }

  public ngOnInit(): void {
    this.allSummaries = this._documentService.getSummaries();
  }

  public viewSingleSummary(id: string): void {
    this.summary = this._documentService.singleSummary(id);
    this._communication.subject.next(this.summary);
    this.router.navigate(['production']);

  }

}
