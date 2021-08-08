import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from '../services/http.service';

@Injectable({
  providedIn: 'root'
})
export class InputsService {

  listOfLang: BehaviorSubject<[]>;
  listOfPartOfSpeech: string[];

  constructor(private http: HttpService) {
    this.listOfLang = new BehaviorSubject<[]>([]);
  }

  setListOfLang():Observable<[]>{
    return this.listOfLang;
  }

  getListOfLang(): void {
    this.http.getWithToken("env/lang").subscribe(
      res => {
        this.listOfLang.next(res)
        console.log(this.listOfLang);
        
      },
      err => {
        console.log(err);
      })
  }
}
