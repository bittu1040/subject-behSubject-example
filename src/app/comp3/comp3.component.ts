import { Component, OnInit } from '@angular/core';
import { DataPassingService } from '../data-passing.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

  constructor(private service: DataPassingService) { }
  data3:any
  username:any;

  ngOnInit() {
    this.service.data.subscribe((data)=>{
      this.data3= data;
      console.log(data)
    })
    this.service.username.subscribe((data)=>{
      this.username= data;
    })
    
  }
}