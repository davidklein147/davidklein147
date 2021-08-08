import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';
import { DataLogin, Login, Logup } from './logClasses';

@Injectable({
  providedIn: 'root'
})
export class LogUpService {

  logupUser: Logup;
  loginUser: Login;
  userData: DataLogin;

  constructor(private http: HttpService, private router: Router) {

  }

  logUp(): void {
    this.http.post<Logup>("/auth/logup", this.logupUser).subscribe(res => {
      console.log("");
    },
      err => {
        console.log("err");
        console.log(err);
      })
  }

  logIn(): void {
    this.http.post<Login>("/auth/login", this.loginUser).subscribe(res => {
      console.log(res);
      this.userData = res;
      localStorage.setItem("userData", JSON.stringify(res));
      this.router.navigate(["/n"])
    },
      err => {
        console.log(err);
      })
  }
}
