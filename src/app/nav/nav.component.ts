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
  public countTotal = 0;
  public countCompleted = 0;
  public countWaiting = 0;

  constructor(
    private patientService : PatientService,
    private router : Router
    ) { }

  ngOnInit(){
    this.patientService.getPatient()
      .subscribe(response => {
        this.patients = response;

        //Calculate Status Counts
        for (const patient of this.patients) {
          if(patient.status)
            this.countCompleted++;
          else
            this.countWaiting++;
          this.countTotal++;
        }
      });
  }
  title = 'Queue Management';
  onSelect(patient){
    this.router.navigate(['/patient',patient.other.pid]);
  }
}
