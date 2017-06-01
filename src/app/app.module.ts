import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DetailComponent } from './detail/detail.component';
import { FooterComponent } from './footer/footer.component';
import { OrganisationComponent } from './organisation/organisation.component';
import { GeneralComponent } from './general/general.component';
import { EndpointsComponent } from './endpoints/endpoints.component';
import { SpecificationComponent } from './specification/specification.component';
import { AppRoutingModule } from 'app/app.routing';
import { DocumentService } from 'app/document.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    DetailComponent,
    FooterComponent,
    OrganisationComponent,
    GeneralComponent,
    EndpointsComponent,
    SpecificationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [DocumentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
