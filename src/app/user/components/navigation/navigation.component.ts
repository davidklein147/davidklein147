import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogUpService } from '../../log.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private log:LogUpService, private router: Router) { }

  ngOnInit(): void { }

  logout():void{
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    delete this.log.userData;
    this.router.navigate([""]); 
  }

}
