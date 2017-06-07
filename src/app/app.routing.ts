import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralComponent } from 'app/dashboard/general/general.component';
import { EndpointsComponent } from 'app/dashboard/endpoints/endpoints.component';
import { SpecificationComponent } from 'app/dashboard/specification/specification.component';
import { DetailComponent } from 'app/dashboard/detail/detail.component';
import { ProductionComponent } from 'app/production/production.component';
import { DashboardComponent } from 'app/dashboard/dashboard.component';


const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    { path: 'dashboard', component: DashboardComponent, children: [
        { path: '', component: GeneralComponent},
        { path: 'endpoints', component: EndpointsComponent},
        { path: 'specification', component: SpecificationComponent},
        { path: 'detail/:id', component: DetailComponent}
    ]},
    { path: 'production', component: ProductionComponent},
    { path: 'production/:id', component: ProductionComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
