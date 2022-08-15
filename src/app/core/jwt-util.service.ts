import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class JwtUtilService {

  constructor(){}

  getToken() {
    return localStorage.getItem('token');
  }

  setToken(token: string) {
    localStorage.setItem('token', token)
  }

  clearToken() {
    localStorage.removeItem('token')
  }

  getInfo() {
    try {
      let info: any = jwt_decode(this.getToken() ?? '')
      if (info) {
        return {
          username: info.sub,
          role: info.role
        }
      }
    } catch (e: any) {

    }
    return null
  }
}
