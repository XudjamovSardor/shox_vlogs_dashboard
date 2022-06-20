import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YangilikComponent } from './dashboard/yangilik/yangilik.component';

const routes: Routes = [
  { path: "dashboard", loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: "autho", loadChildren: () => import('./autho/autho.module').then(m => m.AuthoModule) },
  { path: "", pathMatch: "full", redirectTo: "dashboard" },
  { path: "**", pathMatch: "full", redirectTo: "" }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
