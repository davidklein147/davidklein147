import { Component, OnInit } from '@angular/core';
import { LogUpService } from '../../log.service';
import { Login } from '../../logClasses';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUser = new Login();

  constructor(private log:LogUpService) { }

  ngOnInit(): void {
  }

  login():void{
    this.log.loginUser = this.loginUser;
    this.log.logIn()
  }

}
