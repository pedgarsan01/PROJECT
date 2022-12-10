import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./modules/app-routing.module";
import { AppComponent } from "./app.component";
import { CommunicationService } from "./services/communication.service";
import { AppMaterialModule } from './modules/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlanrepasComponent } from "./planrepas/planrepas.component";
import { PlanrepasForm } from "./planrepas/planrepasForm";


@NgModule({
    declarations: [
        AppComponent,
        PlanrepasComponent,
        PlanrepasForm,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        HttpClientModule,
        FormsModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        AppMaterialModule
    ],
    providers: [CommunicationService],
    bootstrap: [AppComponent]
})
export class AppModule { }
