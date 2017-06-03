import { Component, OnInit } from '@angular/core';
import { ISummary } from 'app/model/summary/isummary';
import { ActivatedRoute, Params } from '@angular/router';
import { DocumentService } from 'app/document.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  private summary: ISummary;

  constructor(private route: ActivatedRoute, private docService: DocumentService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.summary = this.docService.singleSummary(params['id']);
      console.log(this.summary);
    });
  }


}
