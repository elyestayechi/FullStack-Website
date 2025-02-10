import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormulaireContact } from '../Models/FormulaireContact'; // Assuming you have a FormulaireContact model

@Injectable({
  providedIn: 'root'
})
export class FormulaireContactService {

  private baseUrl = 'http://localhost:8093/api/v1/formulaires'; // Your backend URL

  constructor(private http: HttpClient) { }

  createFormulaireContact(formulaireContact: FormulaireContact): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/add`, formulaireContact);
  }

  getFormulaireContactById(id: number): Observable<FormulaireContact> {
    return this.http.get<FormulaireContact>(`${this.baseUrl}/${id}`);
  }

  getAllFormulaireContacts(): Observable<FormulaireContact[]> {
    return this.http.get<FormulaireContact[]>(`${this.baseUrl}/all`);
  }

  deleteFormulaireContact(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/delete/${id}`);
  }
}
