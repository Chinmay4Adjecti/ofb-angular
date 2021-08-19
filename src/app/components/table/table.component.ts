import { Component, OnInit } from '@angular/core';
import { OfbService } from 'src/app/ofb.service'; 
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  data:any; 

  constructor(private ofb:OfbService) { 
      this.ofb.getAllData().subscribe(data=>{
      
        console.warn(data);
      this.data=data;
    })
  
  }

  ngOnInit(): void {
  }
  

}
