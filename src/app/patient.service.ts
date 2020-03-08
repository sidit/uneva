import { Ipatient } from './patient';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private _url : string = "https://dev.uneva.in/task_721/list.php";
  constructor( private http : HttpClient ) { }

  getPatient(): Observable<Ipatient[]>{
    return this.http.get<Ipatient[]>(this._url);
  }
}