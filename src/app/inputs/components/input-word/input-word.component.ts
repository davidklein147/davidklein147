import { Component, OnInit } from '@angular/core';
import { InputsService } from '../../inputs.service';
import { InputWord } from '../../classes/inputsClasses';
import { Lavels } from '../../classes/repetitionData';

@Component({
  selector: 'app-input-word',
  templateUrl: './input-word.component.html',
  styleUrls: ['./input-word.component.css']
})
export class InputWordComponent implements OnInit {

  inputWord: InputWord;
  listOfLang: any;
  listPartOfSpeech: any;

  constructor(private inputSer: InputsService) {
    this.inputWord = new InputWord(JSON.parse(localStorage.getItem("userData")).userId, true);
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

  setAndSend(): void {
    let date = new Date()
    this.inputWord.translateWord.setCreationDate(date); 
    date.setDate(date.getDate() + 1) 
    this.inputWord.repetitionData.setRepetitionDate(date);
    console.log(this.inputWord);
    console.dir(new Date())

  }
}


