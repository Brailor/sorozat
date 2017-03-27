import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetalltimeService {

  constructor(private http : Http) { }
    getAlltime(){
      return this.http.get('http://81.2.254.235:8000/alltime')
        .map(res => res.json());
    }
}
