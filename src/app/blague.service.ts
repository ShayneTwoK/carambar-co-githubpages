import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlagueService {
  private apiUrl = 'http://localhost:3000/api/v1';

  constructor(private http: HttpClient) { }

  // createBlague(blague: any): Observable<any> {
  //   return this.http.post<any>(`${this.apiUrl}/addBlague`, blague);
  // }

  getAllBlague(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/blagues`);
  }

  getBlague(id: BigInteger): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/blagues/${id}`);
  }

  getRandomBlague(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/random`);
  }

}
