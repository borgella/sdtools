import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommunicationService } from 'app/communication.service';
import { ISummary } from 'app/model/isummary';

@Component({
  selector: 'app-organisation',
  templateUrl: './organisation.component.html',
  styleUrls: ['./organisation.component.css']
})
export class OrganisationComponent implements OnInit, OnDestroy {

  private summary: ISummary;
  private desactivate = true;

  constructor(private _communication: CommunicationService) { }

  ngOnInit() {
    this._communication.subject.subscribe((data: ISummary) => {
        this.summary = data;
    });
  }

  ngOnDestroy(): void {
      this._communication.subject.unsubscribe();
    }

}
