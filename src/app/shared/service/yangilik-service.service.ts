import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Page } from '../model/page';
import { Yangilik } from '../model/yangilik';

@Injectable({
  providedIn: 'root'
})
export class YangilikServiceService {
  private api = environment.api + "/api/new"

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Page<Yangilik[]>> {
    return this.http.get<Page<Yangilik[]>>(this.api)
  }

  create(rek: any): Observable<any> {
    let param = {}
    let token = sessionStorage.getItem('token')
    if (token) param = {code: token }
    return this.http.post<any>(this.api, rek)
  }

  update(rek: any): Observable<Yangilik> {
    return this.http.put<Yangilik>(this.api, rek)
  }

  deleteById(id: number): Observable<any> {
    return this.http.delete<any>(this.api + "/" + id)
  }
}
