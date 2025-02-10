import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationRequest } from '../Models/AuthenticationRequest';
import { AuthenticationResponse } from '../Models/AuthenticationResponse';
import { RegisterRequest } from '../Models/Register-Request';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private baseUrl = 'http://localhost:8093/api/v1/auth';

  constructor(private http: HttpClient) { }

  registerUser(RegisterRequest: RegisterRequest): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/register`, RegisterRequest);
  }

  authenticateUser(AuthenticationRequest: AuthenticationRequest): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(`${this.baseUrl}/authenticate`, AuthenticationRequest);
  }

  refreshTokens(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/refresh`);
  }


  saveTokens(response: AuthenticationResponse): void {
    localStorage.setItem('accessToken', response.access_token || '');
    localStorage.setItem('refreshToken', response.refresh_token || '');
  }
}
