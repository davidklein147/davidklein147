import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpService } from '../services/http.service';
import { DailyList } from './repeClass';


@Injectable({
  providedIn: 'root'
})
export class RepeSerService {
  i: number = 0;

  dailyList: BehaviorSubject<DailyList[]>;
  counter: number;


  constructor(private http: HttpService) {
    this.dailyList = new BehaviorSubject<DailyList[]>([])
    this.counter = 0;
  }

  getDailyList(): Observable<DailyList[]> {

    console.log(this.dailyList, this.i++);
    return this.dailyList;
  }



  getDailyListFromServer(): Observable<any> {
    return this.http.getWithToken(`repetition/dailylist/${JSON.parse(localStorage.getItem("userData")).userId}`)
      .pipe(map(dailyList => {
        dailyList.map(word => word.isRepeatd = false)
        return dailyList;
      }))
  }

  deleteDailyListFromLocalStorage(): void {
    var tomorw = new Date(new Date().setDate(new Date().getDate() + 1)).setHours(0, 0, 0, 0)
    setTimeout(() => {
      localStorage.removeItem("dailyList")
    }, tomorw - Date.now())
  }
}
