import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { getLocaleDateFormat } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class OfbService {

  constructor(private http:HttpClient) {}
  getAllData(){
    let url="http://localhost:8080/designationclass/list"
    return this.http.get(url);
  }

}
