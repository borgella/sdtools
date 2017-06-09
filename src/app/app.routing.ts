import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralComponent } from 'app/dashboard/general/general.component';
import { EndpointsComponent } from 'app/dashboard/endpoints/endpoints.component';
import { SpecificationComponent } from 'app/dashboard/specification/specification.component';
import { DetailComponent } from 'app/dashboard/detail/detail.component';
import { OrganisationDetailComponent } from 'app/dashboard/organisationDetail/organisation-detail.component';
import { DashboardComponent } from 'app/dashboard/dashboard.component';


const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    { path: 'dashboard', component: DashboardComponent, children: [
        { path: '', component: GeneralComponent},
        { path: 'endpoints', component: EndpointsComponent},
        { path: 'specifications', component: SpecificationComponent},
        { path: 'detail/:id', component: DetailComponent},
        { path: 'organisation/:id', component: OrganisationDetailComponent},
        { path: 'organisation/:id/detail/:id', redirectTo: 'detail/:id'}
    ]},
    { path: 'organisation/:id', redirectTo: 'dashboard/organisation/:id', pathMatch: 'full'},
    { path: 'prod/:id', redirectTo: 'dashboard/detail/:id', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {  }
