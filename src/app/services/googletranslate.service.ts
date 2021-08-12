import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GoogleObj } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class GoogletranslateService {

  url = `https://translation.googleapis.com/language/translate/v2/?key=`;
  urlList = `https://translation.googleapis.com/language/translate/v2/languages/?key=`;
  urlList1 = `https://translation.googleapis.com/language/translate/v2/detect/?key=`;
  key = `AIzaSyB5B1qXnahdx4NC9mNB52TRrxjK-WnBgB0`;

  constructor(private http: HttpClient) {

  }

  translate(obj: GoogleObj) :Observable<any>{
    return this.http.post(this.url + this.key, obj);
  }

  list():Observable<any>{
    return this.http.get(this.urlList + this.key);
  }
  
}
