import { Component, OnInit, OnDestroy } from '@angular/core';
import { ISummary } from 'app/model/summary/isummary';
import { ActivatedRoute, Params } from '@angular/router';
import { DocumentService } from 'app/services/document.service';
import { IOrganisation } from 'app/model/organisation/iorganisation';
import { DocumentsharedService } from 'app/dashboard/documentshared.service';
import 'rxjs/add/operator/takeWhile';

@Component({
  selector: 'app-production',
  templateUrl: './organisation-detail.component.html',
  styleUrls: ['./organisation-detail.component.css']
})
export class OrganisationDetailComponent implements OnInit, OnDestroy {

  private summaries: Array<ISummary>;
  private summary: ISummary;
  private isAlive = true;

  constructor(private route: ActivatedRoute, private shareDoc: DocumentsharedService) { }

  ngOnInit() {
    this.route.paramMap.switchMap(
      (params: Params) => {
        this.shareDoc.getSummariesForAnOrganisation(params.get('id'));
        this.summaries = this.shareDoc.summaries;
        return this.shareDoc.subjectSummaries.takeWhile(() => this.isAlive);
      }
    ).subscribe((summaries: Array<ISummary>) => {
      this.summaries = summaries;
    });
  }

  public ngOnDestroy(): void {
    this.isAlive = false;
    console.log(this.summaries);
  }

  /**
   * this.route.params.subscribe((params: Params) => { // to be refactored using flatmap
      this.shareDoc.getDocumentsForAnOrganisation(params['id']);
      this.summaries = this.shareDoc.summaries;
      this.shareDoc.subjectSummaries.takeWhile(() => this.isAlive)
        .subscribe((summaries: Array<ISummary>) => {
          this.summaries = summaries;
        });
      console.log(this.summaries);
    });
   */
}
