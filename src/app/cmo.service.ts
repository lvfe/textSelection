import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CmoService {

  constructor(private http:HttpClient) { 
    
    
  }
  get(type) {
    const headers = new HttpHeaders();
    return this.http.get('./assets/intex.'+type,{ headers, responseType: "text"} )
  }
}
