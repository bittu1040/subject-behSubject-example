import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of, Subject } from 'rxjs';

@Injectable()
export class DataPassingService {

  // data= new Subject();
  data= new BehaviorSubject("bittu")
  username= new Subject();

  constructor(private http: HttpClient) { }

  passData(params:any){
    this.data.next(params)
  }

  getData(){
    return this.http.get('https://jsonplaceholder.typicode.com/users/1')
  }

  getdatathroughrxjsoperator(){
    return of([1,2,3,4,5])
  }

}