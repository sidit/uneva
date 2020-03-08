import { PatientService } from './../patient.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public patients = [];

  constructor( 
    private patientService : PatientService ,
    private router : Router
    ) { }

  ngOnInit(){
    this.patientService.getPatient()
      .subscribe(response => this.patients = response);
  }
  title = 'Queue Management';
  onSelect(patient){
    console.log(patient.other.pid);
    this.router.navigate(['/patient',patient.other.pid]);
  }
}




