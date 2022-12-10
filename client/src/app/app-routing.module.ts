import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { PlanrepasComponent } from "./planrepas/planrepas.component";
import { PlanrepasForm } from "./planrepas/planrepasForm";



const routes: Routes = [
  { path: "app", component: AppComponent },
  { path: "planrepas", component: PlanrepasComponent },
  { path: "planrepasForm", component: PlanrepasForm },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }