import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private _url : string = "https://dev.uneva.in/task_721/list.php";
  constructor( private http : HttpClient ) { }

  getPatient(): Observable<any>{
    return this.http.get<any>(this._url);
  }
}
