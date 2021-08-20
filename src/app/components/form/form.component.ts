import { Component, OnInit } from '@angular/core';
import { DesignationClass } from 'src/app/designationClass';
import { OfbService } from 'src/app/ofb.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private ofb:OfbService,) { }

  onSubmit(designationClass:DesignationClass){
    alert(designationClass.name)
    this.ofb.saveData(designationClass).subscribe(data=>{
    })
  }
  

  ngOnInit(): void {
  }

}
