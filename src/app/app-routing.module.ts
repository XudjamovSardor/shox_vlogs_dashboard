import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAccessGuard } from './core/user-access.guard';
import { YangilikComponent } from './dashboard/yangilik/yangilik.component';

const routes: Routes = [
  { path: "dashboard", loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [UserAccessGuard], data: { role: 'ADMIN' } },
  { path: "autho", loadChildren: () => import('./autho/autho.module').then(m => m.AuthoModule) },
  { path: "", pathMatch: "full", redirectTo: "autho" },
  { path: "**", pathMatch: "full", redirectTo: "autho" }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
