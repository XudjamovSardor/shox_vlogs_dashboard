import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Page } from '../model/page';
import { ShowBiznes } from '../model/showbiznes';

@Injectable({
  providedIn: 'root'
})
export class ShowBiznesServiceService {

  private api = environment.api + "/api/starnew"

  constructor(
    private http: HttpClient
  ) {}

  getAll(): Observable<Page<ShowBiznes[]>> {
    return this.http.get<Page<ShowBiznes[]>>(this.api)
  }

  create(obj: any): Observable<ShowBiznes> {
    let param = {}
    let token = sessionStorage.getItem('token')
    if (token) param = {code: token }
    return this.http.post<ShowBiznes>(this.api, obj)
  }

  update(rek: any): Observable<ShowBiznes> {
    return this.http.put<ShowBiznes>(this.api, rek)
  }

  deleteById(id: number): Observable<any> {
    return this.http.delete<any>(this.api +  "/" + id)
  }
}
