import { Component, OnInit } from '@angular/core';
import { DesignationClass } from 'src/app/designationClass';
import { OfbService } from 'src/app/ofb.service'; 
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  data:DesignationClass[]; 

  constructor(private ofb:OfbService) { 
      this.ofb.getAllData().subscribe((data:DesignationClass[]) =>{
      this.data=data;
    })
  
  }

  ngOnInit(): void {
  }
  

}
