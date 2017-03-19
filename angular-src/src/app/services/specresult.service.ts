import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpecresultService {

  constructor(private Http : Http) { }

        showSpecificShow(id:any){

          return this.Http.get('http://localhost:8080/shows/' + id).map(res => res.json());
        }
}
