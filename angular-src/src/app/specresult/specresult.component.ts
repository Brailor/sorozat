import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SpecresultService } from '../services/specresult.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-specresult',
  templateUrl: './specresult.component.html',
  styleUrls: ['./specresult.component.css'],
  providers: [SpecresultService]
})
export class SpecresultComponent implements OnInit {
Show : Object;

constructor(private specresult : SpecresultService, private router : Router, private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .switchMap((params : Params) => this.specresult.showSpecificShow(params['id']))
        .subscribe(show => this.Show = show);
        
             
  }
  changeTitleforSorozatJunkieUrl(){
    var changedName:string = this.Show["title"].replace(/ /g, '-');
    this.Show["Junkie"] = changedName;
  }
  loading(){
    console.log('loading...\n');
  }
  
}
