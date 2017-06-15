import { Component, OnInit } from '@angular/core';
import { DocumentsharedService } from 'app/dashboard/documentshared.service';
import { IserviceDoc } from 'app/model/documentation/iservicedoc';

@Component({
  selector: 'app-specification',
  templateUrl: './specification.component.html',
  styleUrls: ['./specification.component.css']
})
export class SpecificationComponent implements OnInit {
  private document: IserviceDoc;
  private specifications: Array<any>;
  private mapProductionVersions: Array<any> = new Array();

  constructor(private shared: DocumentsharedService) { }

  public ngOnInit(): void {
    if (this.shared.document) {
        this.document = this.shared.document;
        this.mapProductionVersions = this.document.serviceDoc.mapProductionVersions;
        this.specifications = this.mapProductionVersions[0].specifications;
        console.log(this.specifications);
    }
  }

}
