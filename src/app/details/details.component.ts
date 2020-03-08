import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public pid;

  constructor( private route : ActivatedRoute ) { }

  ngOnInit() {
    let id = parseInt( this.route.snapshot.paramMap.get('pid'));
    this.pid = id;
  }

}
