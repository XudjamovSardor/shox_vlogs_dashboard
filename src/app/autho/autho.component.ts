import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../core/account.service';
import { AuthoService } from '../shared/service/autho.service';

@Component({
  selector: 'app-autho',
  templateUrl: './autho.component.html',
  styleUrls: ['./autho.component.scss']
})
export class AuthoComponent implements OnInit {
  authoForm!: FormGroup

  constructor(
    private _fb: FormBuilder,
    private _authoService: AuthoService,
    private _router: Router,
    private _accountService: AccountService
  ) { }

  ngOnInit(): void {
    this.authoForm  = this._fb.group({
      'username': ['', [Validators.required, Validators.minLength(6)]],
      'password': ['', [Validators.required, Validators.minLength(6)]],
      'rememberMe': [false]
    })
  }

  login(){
    let loginParol = this.authoForm.getRawValue();
    this._authoService.signin(loginParol).subscribe(data=>{
     this._accountService.identity().subscribe(user=>{
        switch(data.role){
        case 'ADMIN': this._router.navigate(['/dashboard']); break;
        default: this._router.navigate(['/']); break;
      }
     });
    })

  }

  veiwPass(i: any) {
    if (i.type.toString() == "password") {
      i.type = "text"
    } else {
      i.type = 'password'
    }
  }


}
