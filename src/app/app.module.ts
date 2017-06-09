import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DetailComponent } from './dashboard/detail/detail.component';
import { FooterComponent } from './footer/footer.component';
import { OrganisationComponent } from './organisation/organisation.component';
import { GeneralComponent } from './dashboard/general/general.component';
import { EndpointsComponent } from './dashboard/endpoints/endpoints.component';
import { SpecificationComponent } from './dashboard/specification/specification.component';
import { AppRoutingModule } from 'app/app.routing';
import { DocumentService } from 'app/document.service';
import { CommunicationService } from 'app/communication.service';
import { DocumentsharedService } from 'app/dashboard/documentshared.service';
import { OrganisationDetailComponent } from './dashboard/organisationDetail/organisation-detail.component';

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
    SpecificationComponent,
    OrganisationDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [DocumentService, CommunicationService, DocumentsharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
