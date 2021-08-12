import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from '../services/http.service';
import { InputWord } from './classes/inputsClasses';

@Injectable({
  providedIn: 'root'
})
export class InputsService {
  inputWord:InputWord;
  listOfLang: BehaviorSubject<[]>;
  listOfPartOfSpeech: BehaviorSubject<string[]>;

  constructor(private http: HttpService) {
    this.inputWord = new InputWord(JSON.parse(localStorage.getItem("userData")).userId, true);
    this.listOfLang = new BehaviorSubject<[]>(null);
    this.listOfPartOfSpeech = new BehaviorSubject<[]>(null);
  }

  sendListOfLang(): Observable<[]> {
    return this.listOfLang;
  }

  sendListOfPartOfSpeech(): Observable<string[]> {
    return this.listOfPartOfSpeech;
  }

  getListOfLang(): void {
    if (!this.listOfLang.value) {
      this.http.getWithToken("env/lang").subscribe(
        res => {
          console.log(res);
          this.listOfLang.next(res);
        },
        err => {
          console.log(err);
        })
    }
  }

  getListPartOfSpeech(): void {
    if (!this.listOfPartOfSpeech.value) {
      this.http.getWithToken("env/partofspeech").subscribe(
        res => {
          console.log(res);
          this.listOfPartOfSpeech.next(res);
        },
        err => {
          console.log(err);
        })
    }
  }

  sendInputWord():void{
    this.http.postWithToken("inputs/create", this.inputWord).subscribe(
      res =>{
      console.log(res);
      
    }, err =>{
      console.log(err);
      console.log(err.text);
      
    })
  }
}
