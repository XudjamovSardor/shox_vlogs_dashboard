import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthoRoutingModule } from './autho-routing.module';
import { AuthoComponent } from './autho.component';
import { MatInputModule } from '@angular/material/input';
import { material_import } from '../material-import-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AuthoComponent,


  ],
  imports: [
    CommonModule,
    AuthoRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    MatInputModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class AuthoModule { }
