import { Injectable } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Logup } from './logup';

@Injectable({
  providedIn: 'root'
})
export class LogUpService {

    logupUser: Logup;

  constructor(private http: HttpService) {

  }

  logUp(): void {
    this.http.post("/auth/logup", this.logupUser).subscribe(res => {
      console.log("succesus");
      
      console.log(res);
    },
    err =>{
      console.log("err");
      console.log(err);
      
      
    })
  }
}
