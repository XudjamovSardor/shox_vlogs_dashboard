import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { OnlineYangililarComponent } from './online-yangiliklar/online-yangililar/online-yangililar.component';
import { ReklamaComponent } from './reklama/reklama/reklama.component';
import { ShowBiznesComponent } from './show-biznes/show-biznes/show-biznes.component';
import { YangilikComponent } from './yangilik/yangilik/yangilik.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: "new", component: YangilikComponent },
  { path: "starnew", component: ShowBiznesComponent },
  { path: "reklama", component: ReklamaComponent },
  { path: "onlinenew", component: OnlineYangililarComponent },
  { path: "**", pathMatch: "full", redirectTo: "" }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
