import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthoService {
  private api = environment.api + "/api/autho"
  constructor(
    private hhtp: HttpClient
  ) { }

  create(): Observable<any> {
    return this.hhtp.post<any>(this.api, {});
  }

  validation(code: String) {
    return this.hhtp.get<any>(this.api + "/" + code);
  }
}
