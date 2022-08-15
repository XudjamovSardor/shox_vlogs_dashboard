import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class FaylService {

  baseApi = environment.api + "/api/fail"
  constructor(private http: HttpClient) { }


  upload(file: File){
    let formData = new FormData();
    formData.append("fail", file, file.name);

    let param = {}
    let token = sessionStorage.getItem('token')
    if (token) param = {code: token }

    return this.http.post(this.baseApi + "/upload", formData);
  }
}
