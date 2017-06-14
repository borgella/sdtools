import { Component, OnInit, OnDestroy } from '@angular/core';
import { DocumentService } from 'app/document.service';
import { IOrganisation } from 'app/model/organisation/iorganisation';
import { DocumentsharedService } from 'app/dashboard/documentshared.service';
import 'rxjs/add/operator/takeWhile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  private organisations: Array<IOrganisation>;
  private isAlive = true;

  constructor(private documentService: DocumentService, private shareDoc: DocumentsharedService) { }

  public ngOnInit(): void {
    this.shareDoc.getAllOrganisations();
    this.organisations = this.shareDoc.organisations;
    this.shareDoc.subjectOrganisations.takeWhile(() => this.isAlive)
      .subscribe((organisations: Array<IOrganisation>) => {
        this.organisations = organisations;
      });
  }


  public ngOnDestroy(): void {
    this.isAlive = false;
  }
}
