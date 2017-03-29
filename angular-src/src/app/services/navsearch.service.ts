import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class NavsearchService {

  constructor(private http: Http) { }
    search(name:any){
      return this.http.get('http://localhost:8000/navsearch/' + name)
            .map(res => res.json()); 
    }
}
