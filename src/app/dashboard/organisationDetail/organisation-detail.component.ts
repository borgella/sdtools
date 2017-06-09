import { Component, OnInit, OnDestroy } from '@angular/core';
import { ISummary } from 'app/model/summary/isummary';
import { CommunicationService } from 'app/communication.service';
import { ActivatedRoute, Params } from '@angular/router';
import { DocumentService } from 'app/document.service';
import { IOrganisation } from 'app/model/organisation/iorganisation';
import { DocumentsharedService } from 'app/dashboard/documentshared.service';

@Component({
  selector: 'app-production',
  templateUrl: './organisation-detail.component.html',
  styleUrls: ['./organisation-detail.component.css']
})
export class OrganisationDetailComponent implements OnInit, OnDestroy {

  private summaries: Array<ISummary>;
  private summary: ISummary;

  constructor(private route: ActivatedRoute, private docService: DocumentService,
    private shareDoc: DocumentsharedService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.docService.getDocumentsForAnOrganisation(params['id']);
      this.summaries = this.shareDoc.summaries;
    });
  }

  ngOnDestroy(): void {

  }

}
