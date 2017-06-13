import { Component, OnInit } from '@angular/core';
import { DocumentsharedService } from 'app/dashboard/documentshared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private shareDoc: DocumentsharedService) { }

  public ngOnInit(): void {
    this.shareDoc.getSummaries();
  }


}
