import { Component, OnInit } from '@angular/core';
import { DataPassingService } from '../data-passing.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor(private service: DataPassingService) { }
  data2:any
  username:any
  ngOnInit() {
    this.service.data.subscribe((data)=>{
      this.data2= data;
      console.log(data)
    })

    this.service.username.subscribe((data)=>{
      this.username= data;
    })
    
  }
}