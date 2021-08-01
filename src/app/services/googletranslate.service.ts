import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GoogleObj } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class GoogletranslateService {

  url = `https://translation.googleapis.com/language/translate/v2?key=`;
  key = `AIzaSyB5B1qXnahdx4NC9mNB52TRrxjK-WnBgB0`;

  constructor(private http: HttpClient) {

  }

  translate(obj: GoogleObj) {
    console.log(this.url+this.key);
    console.log(this.url);
    
    return this.http.post(this.url + this.key, obj);
  }
}
