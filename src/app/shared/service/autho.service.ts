import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { JwtUtilService } from 'src/app/core/jwt-util.service';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthoService {
  private api = environment.api + "/api/account"
  constructor(
    private http: HttpClient,
    private jwtUtil: JwtUtilService
  ) { }

  signin(loginParol: any): Observable<any>{
    return this.http.post(this.api+"/signin", loginParol).pipe(
      map((data: any)=>{
          this.jwtUtil.setToken(data.token);
          return this.jwtUtil.getInfo();
      })
    )
  }
}
