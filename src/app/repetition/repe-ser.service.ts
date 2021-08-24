import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from '../services/http.service';
import { DailyList } from './repeClass';

@Injectable({
  providedIn: 'root'
})
export class RepeSerService {


  dailyList: BehaviorSubject<DailyList[]>;
  counter: number;

  constructor(private http: HttpService) {
    this.dailyList = new BehaviorSubject<DailyList[]>([])
    this.counter = 0;
  }

  getDailyList(): Observable<DailyList[]> {
    console.log(this.dailyList);
    return this.dailyList;
  }



  getDailyListFromServer(): void {
   // if (!this.dailyList.value) {
      this.http.getWithToken(`repetition/dailylist/${JSON.parse(localStorage.getItem("userData")).userId}`)
        .subscribe(res => {
          this.dailyList.next(res)
        }, err => {
          console.log(err);
        })
    //}
  }
}
