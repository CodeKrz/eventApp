import { Injectable } from '@angular/core';
import {Http, Response } from '@angular/http';

import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/do';

@Injectable()
export class CommonService {

  constructor(private http: Http) { }

  saveGuest(guest){
    return this.http.post('http://localhost:8080/api/SaveGuest/', guest)
            .pipe(
              map((response: Response) =>response.json())
              )
  }

  GetGuest(){
    return this.http.get('http://localhost:8080/api/getGuest/')
            .pipe(
              map((response: Response) => response.json())
            )
  }
 deleteGuest(id){
    return this.http.post('http://localhost:8080/api/deleteGuest/',{'id': id})
            .pipe(
              map((response: Response) =>response.json())
            )
  }

}
