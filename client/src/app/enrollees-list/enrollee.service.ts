import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {Enrollee} from './enrollee.model';

@Injectable({
  providedIn: 'root'
})
export class EnrolleeService {

  constructor(private http: HttpClient) { }

  /**
   * Fetchs List of Enrollee from the Server
   * @returns Observable<Enrollee[]> -  An observable having a list of Enrollees
   */
  getEnrollees(): Observable<Enrollee[]> {
    return this.http.get<Enrollee[]>('http://localhost:8080/enrollees/');
  }
  /**
   * Fetchs a signle Enrollee Details
   * @param id string - uuid as unique identifier
   * @returns Observable<Enrollee>  - An observable of signle Enrollee
   */
  getEnrolleeDetails(id: string): Observable<Enrollee> {
    return this.http.get<Enrollee>(`http://localhost:8080/enrollees/${id}`);
  }

}
