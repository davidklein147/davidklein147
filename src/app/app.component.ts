import { Component } from '@angular/core';
import { GoogleObj } from './interfaces';
import { GoogletranslateService } from './services/googletranslate.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RememberLanguage';
  word: string = ''
  constructor(private google: GoogletranslateService) {
  
  }

  send() {
    const googleObj: GoogleObj = new GoogleObj([this.word], "en", "he")
   

    this.google.translate(googleObj).subscribe(
      (res: any) => {
        console.log(res);
        console.log(res.data.translations[0].translatedText)
      },
      err => {
        console.log(err);
      }
    );
  }
  getlang():void{
    this.google.list().subscribe(res =>{
      console.log(res);
      
    },err=>{
      console.log(err);
      
    });
  }
}

