import { Component, OnInit } from '@angular/core';
import { ISummary } from 'app/model/isummary';
import { DocumentService } from 'app/document.service';
import { CommunicationService } from 'app/communication.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  private allSummaries: Array<ISummary>;
  private summary: ISummary;

  constructor(private _documentService: DocumentService, private _communication: CommunicationService) { }

  public ngOnInit(): void {
     this.allSummaries = this._documentService.getSummaries();
  }

  public viewSingle(id: string) {
    this.summary = this._documentService.singleSummary(id);
    this._communication.subject.next(this.summary);
    console.log(this.summary);
  }

}
