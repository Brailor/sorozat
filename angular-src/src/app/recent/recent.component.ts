import { Component, OnInit } from '@angular/core';
import { GetRecentService }  from '../services/getrecent.service';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.css'],
  providers: [ GetRecentService ]
})
export class RecentComponent implements OnInit {

  constructor(private recent : GetRecentService) { }
  recents : string[];
  ngOnInit() {
    this.recent.getRecent().subscribe(recentshows => {
      this.recents = recentshows;
      err => {
        console.error(err);
        return false;
      }
    })
  }

}
