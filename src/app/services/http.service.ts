import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  origin = `http://localhost:8090` ;

  constructor(private http: HttpClient) {

  }

  post<T>(path: string, data: T): Observable<any>{
    console.log(data);
    
    return this.http.post<T>(this.origin + path, data);
  }

}
