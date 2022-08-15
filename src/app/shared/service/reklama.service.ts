import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Page } from '../model/page';
import { Reklama } from '../model/reklama';

@Injectable({
  providedIn: 'root'
})
export class ReklamaService {

  private api = environment.api + "/api/reklama"

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Page<Reklama[]>> {
    return this.http.get<Page<Reklama[]>>(this.api)
  }

  create(rek: any): Observable<Reklama> {
    let param = {}
    let token = sessionStorage.getItem('token')
    if (token) param = {code: token }
    return this.http.post<Reklama>(this.api, rek)
  }

  update(rek: any): Observable<Reklama> {
    return this.http.put<Reklama>(this.api, rek)
  }

  deleteById(id: number): Observable<any> {
    return this.http.delete<any>(this.api +  "/" + id)
  }
}
