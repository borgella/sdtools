import { Component, OnInit, OnDestroy } from '@angular/core';
import { ISummary } from 'app/model/summary/isummary';
import { CommunicationService } from 'app/communication.service';
import { ActivatedRoute, Params } from '@angular/router';
import { DocumentService } from 'app/document.service';
import { IOrganisation } from 'app/model/organisation/iorganisation';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.css']
})
export class ProductionComponent implements OnInit, OnDestroy {

  private organisation: IOrganisation;
  private summary: ISummary;

  constructor(private route: ActivatedRoute, private docService: DocumentService, private _communication: CommunicationService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
       this.organisation = this.docService.getOneOrganisation(params['id']);
    });
  }

  ngOnDestroy(): void {

  }

}
