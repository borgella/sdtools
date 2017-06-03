import { Component, OnInit, OnDestroy } from '@angular/core';
import { ISummary } from 'app/model/summary/isummary';
import { Subscription } from 'rxjs/Subscription';
import { CommunicationService } from 'app/communication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  private summary: ISummary;
  private subscription: Subscription = new Subscription();

  constructor(private _communication: CommunicationService) { }

  ngOnInit() {
    this.subscription = this._communication.subject.subscribe((data: ISummary) => {
      this.summary = data;
      console.log(this.summary);
    });
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
