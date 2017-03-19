import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  showname: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onSubmitSearch(){
    this.router.navigateByUrl('results/' + this.showname);
  
  
  }
}
