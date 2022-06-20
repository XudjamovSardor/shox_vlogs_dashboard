import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { OnlineYangililarComponent } from './online-yangililar/online-yangililar.component';
import { ReklamaComponent } from './reklama/reklama/reklama.component';
import { ShowBiznesComponent } from './show-biznes/show-biznes/show-biznes.component';
import { YangilikComponent } from './yangilik/yangilik.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: "new", component: YangilikComponent },
  { path: "starnew", component: ShowBiznesComponent },
  { path: "reklama", component: ReklamaComponent },
  { path: "onlinenew", component: OnlineYangililarComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
