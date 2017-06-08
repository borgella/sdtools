import { Component, OnInit } from '@angular/core';
import { DocumentsharedService } from 'app/dashboard/documentshared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DocumentsharedService]
})
export class DashboardComponent implements OnInit {

  constructor() { }

  public ngOnInit(): void { }


}
