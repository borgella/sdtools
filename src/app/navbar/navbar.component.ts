import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  private searchControl = new FormControl();

  constructor() { }

  public ngOnInit(): void {
    this.searchControl.valueChanges.subscribe((value: string) => {
      console.log(value);
    });
  }

  public ngOnDestroy(): void {
    this.searchControl.reset();
  }

  public reset(): void {
    this.searchControl.reset();
  }

}
