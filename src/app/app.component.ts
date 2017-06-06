import { Component, OnInit, OnDestroy } from '@angular/core';
import { ISummary } from 'app/model/summary/isummary';
import { Subscription } from 'rxjs/Subscription';
import { CommunicationService } from 'app/communication.service';
import { DocumentService } from 'app/document.service';
import { IOrganisation } from 'app/model/organisation/iorganisation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  private organisations: Array<IOrganisation>;
  private summary: ISummary;
  private subscription: Subscription = new Subscription();

  constructor(private documentService: DocumentService, private _communication: CommunicationService) { }

  ngOnInit() {
    this.subscription = this._communication.subject.subscribe((data: ISummary) => {
      this.summary = data;
      console.log(this.summary);
    });

    this.organisations = this.documentService.getAllOrganisations();

  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
