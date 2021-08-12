import { Component, OnInit } from '@angular/core';
import { RepeSerService } from '../../repe-ser.service';
import { singleWord, DailyList } from '../../repeClass';

@Component({
  selector: 'app-daily-repeti',
  templateUrl: './daily-repeti.component.html',
  styleUrls: ['./daily-repeti.component.css']
})
export class DailyRepetiComponent implements OnInit {

  dailyList:DailyList[];
  singleWord: singleWord;

  constructor(private repeSer: RepeSerService) { 
    this.dailyList = this.repeSer.dailyList;
  }

  ngOnInit(): void {
    this.getDailyList();
    
  }

  getDailyList():void{
    console.log("get");
    
    this.repeSer.getDailyRepeList();
  }

}
