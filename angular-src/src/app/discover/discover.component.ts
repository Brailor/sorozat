import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DiscoverService } from '../services/discover.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css'],
  providers : [DiscoverService]
})
export class DiscoverComponent implements OnInit {

  date: string;
  genre: number;
  showdata: Object;
  genres: Object[];
  dates: string[] = this.loadDates();
 
 
  constructor(private discover : DiscoverService) {
    
  }

  ngOnInit() {
    
  this.genres = [{category : 'Akció & Kaland', id : 10759},{category: 'Animáció', id : 16}, {category: 'Dokumentum', id : 99},
  {category: 'Dráma', id: 18}, {category: 'Családi', id: 10751}, {category: 'Gyerek', id: 10762}, {category: 'Komédia', id : 35},
  {category: 'Hírek', id: 10763}, {category: 'Sci-fi & Fantasy', id: 10765}, {category: 'Krimi', id: 80}, {category: 'Misztikus', id: 9648}, {category: 'Western', id: 37}];
  
  }
  loadDates(){
    var dates = [];
    var max = new Date().getFullYear();
    var min = max - 27;
    for(var i = max; i >= min; i--) {
      
        dates.push(i.toString());
    }
    return dates;
  }
  onSubmitDiscover(){
    const discoverData = {
      date : this.date,
      genre : this.genre
    }

    this.discover.getDiscoveries(discoverData.date, discoverData.genre).subscribe(discoveredShows => {
      this.showdata = discoveredShows;
      err =>{
        console.error(err);
        return false;
      }
    })
  }
 
}
