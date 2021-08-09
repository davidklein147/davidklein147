import { Component, Input, OnInit } from '@angular/core';
import { InputWord } from '../../classes/inputsClasses';
import { Form } from '../form';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() formObj:InputWord;
  form: Form<any>

  constructor() { 
    
    
  }

  ngOnInit(): void {
    console.log(this.formObj);
    
    this.form = new Form(this.formObj)
  }

}
