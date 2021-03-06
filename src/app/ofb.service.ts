import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { getLocaleDateFormat } from '@angular/common';
import { DesignationClass } from './designationClass';

@Injectable({
  providedIn: 'root'
})
export class OfbService {

  constructor(private http:HttpClient) {}
  
  getAllData(){
    let url="http://localhost:8080/designationclass/list"
    return this.http.get<DesignationClass[]>(url);
  }
  saveData(data:DesignationClass){
    let url="http://localhost:8080/designationclass/create"
    return this.http.post(url,data);
  }
  updateData(data:DesignationClass){
    let url="http://localhost:8080/designationclass/update"
    return this.http.put(url,data);
  }
  deleteData(id:any){
    let url="http://localhost:8080/designationclass/delete/"+id;
    return this.http.delete(url);
  }
}
