import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Servic } from '../Models/Servic'; // Assuming you have a Servic model

@Injectable({
  providedIn: 'root'
})
export class ServicService {

  private baseUrl = 'http://localhost:8093/api/v1/services'; // Your backend URL

  constructor(private http: HttpClient) { }

  createService(service: Servic): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/add`, service);
  }

  getServiceById(id: number): Observable<Servic> {
    return this.http.get<Servic>(`${this.baseUrl}/${id}`);
  }

  getAllServices(): Observable<Servic[]> {
    return this.http.get<Servic[]>(`${this.baseUrl}/all`);
  }

  updateService(id: number, service: Servic): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/update/${id}`, service);
  }

  deleteService(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/delete/${id}`);
  }
}
