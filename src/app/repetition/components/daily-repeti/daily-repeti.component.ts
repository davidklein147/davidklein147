import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Lavels, RepetitionData } from 'src/app/inputs/classes/repetitionData';
import { HttpService } from 'src/app/services/http.service';
import { RepeSerService } from '../../repe-ser.service';
import { SingleWord, DailyList } from '../../repeClass';

@Component({
  selector: 'app-daily-repeti',
  templateUrl: './daily-repeti.component.html',
  styleUrls: ['./daily-repeti.component.css']
})
export class DailyRepetiComponent implements OnInit, OnDestroy {

  dailyList: DailyList[];
  singleWord: SingleWord;
  displayTranslateWord: boolean;
  subscription: Subscription;


  constructor(private repeSer: RepeSerService, private http: HttpService) {

  }

  ngOnDestroy(): void {
    //this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    if (!JSON.parse(localStorage.getItem("dailyList")) ||
      (JSON.parse(localStorage.getItem("dayOfDailyList")) < new Date().setHours(0, 0, 0, 0))) {
      console.log("from server");
      this.repeSer.getDailyListFromServer().subscribe(res => {
        this.dailyList = res;
        localStorage.setItem("dailyList", JSON.stringify(res));
        localStorage.setItem("dayOfDailyList", JSON.stringify(Date.now()));
        this.singleWordDisplay()
      }, err => {
        console.error(err);
      });
    } else {
      console.log("local stoage");
      this.dailyList = (JSON.parse(localStorage.getItem("dailyList")));
      this.singleWordDisplay()
    }
  }
  
  singleWordDisplay(): void {
    if (!this.dailyList[0]) {
      console.log(this.dailyList);
      alert("Today there are'nt words to repeat!")
    } else if (!this.dailyList[this.repeSer.counter]) {
      var isThere = this.dailyList.findIndex(isRepeatd => isRepeatd.isRepeatd == false)
      if (isThere > -1) {
        this.repeSer.counter = isThere
        this.singleWordDisplay()
      } else {
        alert("Congratulations! \n You have completed the daily list")
      }
    }
    else {
      console.log(this.dailyList[this.repeSer.counter]);
      this.singleWord = new SingleWord(this.dailyList[this.repeSer.counter])
      !this.dailyList[this.repeSer.counter].isRepeatd ? this.displayTranslateWord = false : this.displayTranslateWord = true
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
      localStorage.setItem("dailyList", JSON.stringify(this.dailyList));
      this.repeSer.counter++;
      this.singleWordDisplay()
    }
    
  next(): void {
    if (this.repeSer.counter < this.dailyList.length) {
      this.repeSer.counter++;
      this.singleWordDisplay()
    }
  }

  beck(): void {
    if (this.repeSer.counter > 0) {
      this.repeSer.counter--;
      this.singleWordDisplay()
    }
  }


}
