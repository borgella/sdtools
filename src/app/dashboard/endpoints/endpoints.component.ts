import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-endpoints',
  templateUrl: './endpoints.component.html',
  styleUrls: ['./endpoints.component.css']
})
export class EndpointsComponent implements OnInit {
  private endpoint = 'Endpoints quelque chose';
  constructor() { }

  ngOnInit() {
  }

}
