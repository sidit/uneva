import { PatientService } from './../patient.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public patients = [];

  constructor( private patientService : PatientService ) { }

  ngOnInit(){
    this.patientService.getPatient()
      .subscribe(response => this.patients = response.data);
  }
  title = 'Queue Management';
}
