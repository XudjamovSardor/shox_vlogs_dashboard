import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterModule, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class UserAccessGuard implements CanActivate {

  constructor(
    private router: Router,
    private accontService: AccountService,
    private snakBar: MatSnackBar
  ){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let role = route.data['role'];
      let natija = true;
      if(role){
        if(!this.accontService.hasRole(role)) {
          this.toLogin();
          return false;
        }
        else return true;
      }

      if(this.accontService.isAuthinticated()){
        return true;
      } else {
        this.toLogin();
        return false;
      }
  }
  toLogin() {
    this.snakBar.open(`Bu bo'limga sizga ruxsat etilmagan! Iltimos kiring!`, 'Ok', {
      duration: 4000,
    });
    this.router.navigate(['/autho']);
  }
  
}
