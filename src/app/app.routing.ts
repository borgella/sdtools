import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralComponent } from 'app/general/general.component';
import { EndpointsComponent } from 'app/endpoints/endpoints.component';
import { SpecificationComponent } from 'app/specification/specification.component';
import { DetailComponent } from 'app/detail/detail.component';
import { ProductionComponent } from 'app/production/production.component';


const routes: Routes = [
    { path: '', component: GeneralComponent},
    { path: 'production', component: ProductionComponent},
    { path: 'endpoints', component: EndpointsComponent},
    { path: 'specification', component: SpecificationComponent},
    { path: 'detail/:id', component: DetailComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
