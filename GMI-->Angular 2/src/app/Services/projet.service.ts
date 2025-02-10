import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Projet } from '../Models/Projet'; // Assuming you have a Projet model

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  private baseUrl = 'http://localhost:8093/api/v1/projets'; // Your backend URL

  constructor(private http: HttpClient) { }

  createProjet(projet: Projet): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/add`, projet);
  }

  getProjetById(id: number): Observable<Projet> {
    return this.http.get<Projet>(`${this.baseUrl}/${id}`);
  }

  getAllProjets(): Observable<Projet[]> {
    return this.http.get<Projet[]>(`${this.baseUrl}/all`);
  }

  updateProjet(id: number, projet: Projet): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/update/${id}`, projet);
  }

  deleteProjet(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/delete/${id}`);
  }
}
