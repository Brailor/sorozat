import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavsearchService } from '../services/navsearch.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [ NavsearchService ]
})
export class NavbarComponent implements OnInit {

  showname: string;
  items: any;

  constructor(private router: Router,
              private service: NavsearchService
  ) { }

  ngOnInit() {

  }
  onSubmitSearch(){
    this.router.navigateByUrl('results/' + this.showname);
  }

  search(term: any){
    if(term !== ''){
    this.service.search(term)
                  .subscribe(result => this.items = result);
    }
    else{
      this.items = null;
    }
  }
 
}
