import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChangePasswordRequest } from '../Models/ChangePasswordRequest';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8093/api/v1/users';

  constructor(private http: HttpClient) { }

  changePassword(request: ChangePasswordRequest, token: string): Observable<any> {
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`);
    return this.http.patch<any>(`${this.baseUrl}/changePassword`, request, { headers });
  }
}
