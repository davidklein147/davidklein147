import { Component, OnInit } from '@angular/core';
import { LogUpService } from '../../log-up.service';
import { Logup } from '../../logup';

@Component({
  selector: 'app-log-up',
  templateUrl: './log-up.component.html',
  styleUrls: ['./log-up.component.css']
})
export class LogUpComponent implements OnInit {

  logupUser = new Logup("","","");
  constructor(public logupse: LogUpService) {
   }

  ngOnInit(): void {
  }

  logup():void{
    console.log(this.logupUser);
    
    this.logupse.logupUser = this.logupUser
    this.logupse.logUp();
  }
  

}
