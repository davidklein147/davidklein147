import { Injectable } from '@angular/core';
import { HttpService } from '../services/http.service';
import { DailyList } from './repeClass';

@Injectable({
  providedIn: 'root'
})
export class RepeSerService {

  dailyList: DailyList[];
  constructor(private http: HttpService) {

  }

  getDailyRepeList(): void {
    this.http.getWithToken(`repetition/dailylist/${JSON.parse(localStorage.getItem("userData")).userId}`)
      .subscribe(res => {
        console.log(res);
        this.dailyList = res;
      }, err => {
        console.log(err);
      })
  }
}
