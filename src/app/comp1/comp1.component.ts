import { Component, OnInit } from '@angular/core';
import { DataPassingService } from '../data-passing.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor(private service: DataPassingService) { }
  data1:any
  username: any

  ngOnInit() {
    this.service.data.subscribe((data)=>{
      this.data1= data;
      console.log(data)
    })

    this.service.username.subscribe((data)=>{
      this.username= data;
    })

    
  }

}