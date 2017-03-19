import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetRecentService {

  constructor(private http : Http) { }
    getRecent(){
      return this.http.get('http://localhost:8080/recent')
        .map(res => res.json());
    }
}
