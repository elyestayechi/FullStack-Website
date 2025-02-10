import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Models/User';
import { RegisterRequest } from '../Models/Register-Request';
import { AuthenticationResponse } from '../Models/AuthenticationResponse';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl = 'http://localhost:8093/api/v1/admin';

  constructor(private http: HttpClient) { }

  getUserById(userId: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/users/${userId}`);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }

  createUser(request: RegisterRequest): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/addusers`, request);
  }

  updateUser(userId: number, request: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/updateusers/${userId}`, request);
  }

  deleteUser(userId: number): Observable<User> {
    return this.http.delete<User>(`${this.baseUrl}/deleteusers/${userId}`);
  }
}
