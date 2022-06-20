import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthoComponent } from './autho.component';

const routes: Routes = [
  {
    path: '',
    component: AuthoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthoRoutingModule { }
