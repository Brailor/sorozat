import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DiscoverService {

  constructor(private Http : Http) {
   }


   getDiscoveries(date:string, genre:number){
     return this.Http.get('http://localhost:8080/discover/' + date + ':' + genre)
                        .map(res => res.json());
   }

}
