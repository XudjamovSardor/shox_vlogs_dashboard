import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthoService } from '../shared/service/autho.service';

@Component({
  selector: 'app-autho',
  templateUrl: './autho.component.html',
  styleUrls: ['./autho.component.scss']
})
export class AuthoComponent implements OnInit {
  authoForm!: FormGroup

  login = "shoxvlogs";
  passowrd = "shoxvlogsyoutube1234";

  constructor(
    private _fb: FormBuilder,
    private _authoService: AuthoService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.authoForm = this._fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  validets() {

    let row = this.authoForm.getRawValue();
    
    if (row.login == this.login || row.password == this.passowrd) {
           this._authoService.create().subscribe(d => {
              sessionStorage.setItem('token', d.code);
              this._router.navigate(['/dashboard']);
           })
    }

  }

}
