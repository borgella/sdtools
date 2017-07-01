import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ISummary } from 'app/model/summary/isummary';
import { IOrganisation } from 'app/model/organisation/iorganisation';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-organisation',
  templateUrl: './organisation.component.html',
  styleUrls: ['./organisation.component.css']
})
export class OrganisationComponent implements OnInit {

  @Input() private organisationsChild: Array<IOrganisation>;

  public constructor(private route: ActivatedRoute) { }

  public ngOnInit(): void {

  }
}
