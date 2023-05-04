import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataPassingService } from './data-passing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {


  constructor(private service: DataPassingService){

  }
data= "bbbbb"

  ngOnInit() {

    // this.service.passData(this.data)

    this.service.getdatathroughrxjsoperator().subscribe((data)=>{
      console.log(data)
    })

  }

  onclick(params: any){
    this.service.passData(params.value)

  }


  getUsername(){
    this.service.getData().subscribe((data:any)=>{
      this.service.username.next(data.username)
    })
  }
}
