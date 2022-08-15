import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { OnlineYangilik } from '../model/OnlineYangilik';

@Injectable({
  providedIn: 'root'
})
export class OnlineYangiliklarServiceService {
  private api = environment.api + "/api/onlinenew"
  constructor(
    private http: HttpClient 
  ) { }

  getAll(): Observable<OnlineYangilik[]> {
    return this.http.get<OnlineYangilik[]>(this.api);
  }

  create(i: any): Observable<OnlineYangilik> {
    let param = {}
    let token = sessionStorage.getItem('token')
    if (token) param = {code: token}
    return this.http.post<OnlineYangilik>(this.api, i)
  }

  update(i: any): Observable<OnlineYangilik> {
    return this.http.put<OnlineYangilik>(this.api, i)
  }

  deletById(id: number): Observable<any> {
    return this.http.delete<any>(this.api + "/" + id)
  }
}
