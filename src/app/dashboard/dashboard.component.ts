import { MediaMatcher } from '@angular/cdk/layout';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthoService } from '../shared/service/autho.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private _authoService: AuthoService, private _router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngAfterViewInit(): void {
    let code = sessionStorage.getItem('token');
    if (code) {        
      this.valid(code);
    } else {
      this._router.navigate(['/autho'])     
    }
  }
  valid(code: String) {
    this._authoService.validation(code).subscribe(d => {
      if (!d) {
        this._router.navigate(['/autho']);
      }
    })
  }

  logOut() {
    sessionStorage.removeItem("token")
    this._router.navigate(['/autho'])
  }
}
