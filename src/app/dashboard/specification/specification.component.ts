import { Component, OnInit } from '@angular/core';
import { DocumentService } from 'app/document.service';
import { DocumentsharedService } from 'app/dashboard/documentshared.service';

@Component({
  selector: 'app-specification',
  templateUrl: './specification.component.html',
  styleUrls: ['./specification.component.css']
})
export class SpecificationComponent implements OnInit {

  private specifications: Array<any>;
  private mapProductionVersions: Array<any> = new Array();

  constructor(private docService: DocumentService, private shared: DocumentsharedService) { }

  public ngOnInit(): void {
    if (this.shared.document) {
      this.mapProductionVersions = this.shared.document.serviceDoc.mapProductionVersions;
      this.specifications = this.mapProductionVersions[0].specifications;
      console.log(this.specifications);
    }
  }

}
