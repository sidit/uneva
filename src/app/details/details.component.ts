import { PatientService } from './../patient.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public details = [];
  public patientId;
  public title;

  constructor(
    private patientService: PatientService,
    private route : ActivatedRoute 
    ) { }

  ngOnInit() {
    this.patientId = parseInt(this.route.snapshot.paramMap.get('pid'));
    
    this.patientService.getDetails(this.patientId)
    .subscribe(response => {
      this.details = response;
      this.title = this.details.person_full_name;
    });
  }
}
