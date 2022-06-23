import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { OnlineYangililarComponent } from './online-yangililar/online-yangililar.component';
import { ReklamaComponent } from './reklama/reklama/reklama.component';
import { ShowBiznesComponent } from './show-biznes/show-biznes/show-biznes.component';
import { YangilikComponent } from './yangilik/yangilik.component';
import { material_import } from '../material-import-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { SafePipe } from '../shared/safe.pipe';


@NgModule({
  declarations: [
    DashboardComponent,
    OnlineYangililarComponent,
    ReklamaComponent,
    ShowBiznesComponent,
    YangilikComponent,
    SafePipe

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,

    FormsModule,
    ReactiveFormsModule,

    ...material_import
  ]
})
export class DashboardModule { }
