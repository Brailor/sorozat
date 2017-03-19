import { Component, OnInit } from '@angular/core';
import { GetalltimeService } from '../services/getalltime.service';

@Component({
  selector: 'app-alltime',
  templateUrl: './alltime.component.html',
  styleUrls: ['./alltime.component.css'],
  providers: [ GetalltimeService ]
})
export class AlltimeComponent implements OnInit {

  constructor(private getalltime: GetalltimeService) { }
  
  alltime: string[];

  ngOnInit() {
   this.getalltime.getAlltime().subscribe(data => {
    this.alltime = data;
     err => {
        console.error(err);
        return false;
   }
   })
  }
 
}
