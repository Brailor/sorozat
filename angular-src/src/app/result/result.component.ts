import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SearchService } from '../services/search.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  providers: [ SearchService ]
})
export class ResultComponent implements OnInit {

  constructor(private search : SearchService, private router : Router, private route : ActivatedRoute) { }

  Show: Object;

  ngOnInit() {
    this.route.params
      .switchMap((params : Params) => this.search.searchByName(params['name']))
        .subscribe(data => {
          this.Show = data;
        });
  }
}
