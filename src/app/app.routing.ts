import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralComponent } from 'app/general/general.component';
import { EndpointsComponent } from 'app/endpoints/endpoints.component';
import { SpecificationComponent } from 'app/specification/specification.component';


const routes: Routes = [
    { path: '', component: GeneralComponent},
    { path: 'endpoints', component: EndpointsComponent},
    { path: 'specification', component: SpecificationComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
