import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http"
import { material_import } from './material-import-list';
import { YangilikComponent } from './yangilik/yangilik/yangilik.component';
import { ShowBiznesComponent } from './show-biznes/show-biznes/show-biznes.component';
import { OnlineYangililarComponent } from './online-yangiliklar/online-yangililar/online-yangililar.component';
import { ReklamaComponent } from './reklama/reklama/reklama.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    YangilikComponent,
    ShowBiznesComponent,
    OnlineYangililarComponent,
    ReklamaComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ...material_import,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
