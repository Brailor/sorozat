import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {

  constructor(private Http : Http) { }

    searchByName(name:string){

      return this.Http.get('http://81.2.254.235:8000/search/' + name).map(res => res.json());
      
    }

}
