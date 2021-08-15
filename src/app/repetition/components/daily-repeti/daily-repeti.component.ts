import { Component, OnInit } from '@angular/core';
import { Lavels, RepetitionData } from 'src/app/inputs/classes/repetitionData';
import { HttpService } from 'src/app/services/http.service';
import { RepeSerService } from '../../repe-ser.service';
import { SingleWord, DailyList } from '../../repeClass';

@Component({
  selector: 'app-daily-repeti',
  templateUrl: './daily-repeti.component.html',
  styleUrls: ['./daily-repeti.component.css']
})
export class DailyRepetiComponent implements OnInit {

  dailyList: DailyList[];
  singleWord: SingleWord;
  displayTranslateWord: boolean;

  constructor(private repeSer: RepeSerService, private http: HttpService) {

  }

  ngOnInit(): void {
    this.repeSer.getDailyListFromServer();
    this.repeSer.getDailyList().subscribe(data => {
      this.dailyList = data;
      for (const isRepeatd of this.dailyList) {
        isRepeatd.isRepeatd = false
      }
    })
  }

  singleWordDisplay(): void {

    if (!this.dailyList[0]) {
      console.log(this.dailyList);
      alert("Today there are no words to repeat!")
    } else if (!this.dailyList[this.repeSer.counter]) {
      var isThere;
      if (isThere = this.dailyList.findIndex(isRepeatd => isRepeatd.isRepeatd == false) > -1) {
        this.repeSer.counter = isThere
      } else {
        alert("Congratulations! \n You have completed the daily list")
      }
    }
    else {
      console.log(this.dailyList[this.repeSer.counter]);

      this.singleWord = new SingleWord(this.dailyList[this.repeSer.counter])
      if (!this.dailyList[this.repeSer.counter].isRepeatd) {
        this.displayTranslateWord = false
      }
    }
  }

  setNextRepeDate(score: number) {
    var repeDate = new RepetitionData(this.dailyList[this.repeSer.counter].TranslateWordId, this.dailyList[this.repeSer.counter].Type);
    repeDate.setLavel(this.dailyList[this.repeSer.counter].Lavel, score, new Lavels());
    repeDate.setDateByLavel(new Lavels());
    repeDate.score = score;
    console.log(repeDate);
    this.http.postWithToken("repetition/nextdate", repeDate).subscribe(
      res => {

      }, err => {

      })

    this.dailyList[this.repeSer.counter].isRepeatd = true;
    this.repeSer.counter++;
    this.singleWordDisplay()
  }

  next(): void {
    if(this.repeSer.counter < this.dailyList.length){    
    this.repeSer.counter++;
    this.singleWordDisplay()
    }
  }

  beck(): void {
    if(this.repeSer.counter > 0){    
    this.repeSer.counter--;
    this.singleWordDisplay()
    }
  }


}
