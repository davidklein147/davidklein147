import { Component, OnInit } from '@angular/core';
import { InputsService } from '../../inputs.service';
import { InputWord } from '../../classes/inputsClasses';
import { Lavels } from '../../classes/repetitionData';
import { GoogletranslateService } from 'src/app/services/googletranslate.service';
import { GoogleObj } from 'src/app/interfaces';
import { find } from 'rxjs/operators';

@Component({
  selector: 'app-input-word',
  templateUrl: './input-word.component.html',
  styleUrls: ['./input-word.component.css']
})
export class InputWordComponent implements OnInit {

  inputWord: InputWord;
  listOfLang: any;
  listPartOfSpeech: any;
  

  constructor(private inputSer: InputsService, private google: GoogletranslateService) {
    this.inputWord = this.inputSer.inputWord;
    console.log(this.inputWord);
  }

  ngOnInit(): void {
    this.inputSer.getListOfLang();
    this.inputSer.getListPartOfSpeech();

    this.inputSer.sendListOfLang().subscribe(res => {
      this.listOfLang = res;
    });

    this.inputSer.sendListOfPartOfSpeech().subscribe(res => {
      this.listPartOfSpeech = res;  
    });
  }

  inputWordSetAndSend(): void {
    this.inputWord.sourceWord.sourceWord = this.trimString(this.inputWord.sourceWord.sourceWord)
    this.inputWord.translateWord.translateWord = this.trimString(this.inputWord.translateWord.translateWord)
    this.inputWord.translateWord.setCreationDate(new Date()); 
    //date.setDate(date.getDate() + 1) 
    this.inputWord.repetitionData.setDateByLavel(new Lavels());
    console.log(this.inputWord);
    this.inputSer.sendInputWord();
    
  }

  trimString(string: string):string{
    return string.trim()
  }

  send() {

    var sourcelang = this.listOfLang.findIndex(lang => lang.Id == this.inputWord.sourceWord.sourceLang)
    var translatelang = this.listOfLang.findIndex(lang => lang.Id == this.inputWord.translateWord.translateLang)
    console.log( sourcelang +"   " + translatelang);
    
    const googleObj: GoogleObj = new GoogleObj(
      [this.inputWord.sourceWord.sourceWord],
      this.listOfLang[sourcelang].LanguageCode,
      this.listOfLang[translatelang].LanguageCode)
   
    this.google.translate(googleObj).subscribe(
      (res: any) => {
        this.inputWord.translateWord.translateWord = res.data.translations[0].translatedText
        console.log(res);
        console.log(res.data.translations[0].translatedText)
      },
      err => {
        console.log(err);
      }
    );
  }
}


