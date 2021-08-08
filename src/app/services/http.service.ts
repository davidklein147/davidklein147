import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  origin = `http://localhost:8090` ;

  constructor(private http: HttpClient) {

  }

  post<T>(path: string, data: T): Observable<any>{
    return this.http.post<T>(this.origin + path, data)
    .pipe(tap(res => {
      if(res.token){
        localStorage.setItem("token",res.token)
        //sessionStorage.setItem("token", res.token)
      }
    }));
  }

  getWithToken(path: string, headers?):Observable<any>{
    return this.http.get(`${this.origin}/api/${path}`, this.addHeaders(headers))
  }

  postWithToken<T>(path: string, body: T, headers?: {}): Observable<any> {
    console.log("post");
    return this.http.post<T>(`${this.origin}/api/${path}`, body, this.addHeaders(headers))
  }

  addHeaders(headers: {}): object {
    headers = headers ? headers : {};
    headers['x-access-token'] = localStorage.getItem("token");
    headers['content-type'] = "application/json";
    return {
      headers: new HttpHeaders(headers)
    };
  }
}
