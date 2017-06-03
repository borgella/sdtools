import { Component, OnInit, OnDestroy } from '@angular/core';
import { ISummary } from 'app/model/summary/isummary';
import { CommunicationService } from 'app/communication.service';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.css']
})
export class ProductionComponent implements OnInit, OnDestroy {

  private summary: ISummary;

  constructor(private _communication: CommunicationService) { }

  ngOnInit() {
    this._communication.subject.subscribe((data: ISummary) => {
      this.summary = data;
      console.log(this.summary);
    });
  }

  ngOnDestroy(): void {
    if (this.summary) {
      this._communication.subject.unsubscribe();
    }
  }

}
