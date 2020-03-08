import { PatientService } from './../patient.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public details = [];

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.patientService.getDetails()
    .subscribe(response => this.details = response);
  console.log(this.details);
  }

}
