import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from '../services/http.service';

@Injectable({
  providedIn: 'root'
})
export class InputsService {

  _listOfLang: [];
  listOfLang: BehaviorSubject<[]>;
  
  _listOfPartOfSpeech: string[];
  listOfPartOfSpeech: BehaviorSubject<string[]>;

  constructor(private http: HttpService) {
    this.listOfLang = new BehaviorSubject<[]>(null);
    this.listOfPartOfSpeech = new BehaviorSubject<[]>(null);
  }

  setLists(): void {
    this.listOfLang.next(this._listOfLang)
    this.listOfPartOfSpeech.next(this._listOfPartOfSpeech)
  }

  sendListOfLang(): Observable<[]> {
    return this.listOfLang;
  }

  sendListOfPartOfSpeech(): Observable<string[]> {
    return this.listOfPartOfSpeech;
  }

  getListOfLang(): void {
    if (!this._listOfLang) {
      this.http.getWithToken("env/lang").subscribe(
        res => {
          console.log(res);
          
          this._listOfLang = res;
          this.setLists();
        },
        err => {
          console.log(err);
        })
    }
  }

  getListPartOfSpeech(): void {
    if (!this._listOfPartOfSpeech) {
      this.http.getWithToken("env/partofspeech").subscribe(
        res => {
          console.log(res);
          
          this._listOfPartOfSpeech = res;
          this.setLists();
        },
        err => {
          console.log(err);
        })
    }
  }
}
