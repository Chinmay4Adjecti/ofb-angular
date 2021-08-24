import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DesignationClass } from 'src/app/designationClass'; 


import { OfbService } from 'src/app/ofb.service'; 
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  data:DesignationClass[]=[]; 

  constructor(private ofb:OfbService,private route:Router) { 
      this.ofb.getAllData().subscribe((data:DesignationClass[]) =>{
      this.data=data;
    })
  }
updateData(designationClass:DesignationClass){
  this.route.navigate(['update']);

}

deleteData(item:DesignationClass,i:any){
  let a=prompt("Please Type 'Confirm' if you want to delete")
  if(a=='Confirm'){
      this.ofb.deleteData(item.id).subscribe(result=>{
        this.data.splice(i,1);
      });
      
  }
}

  ngOnInit(): void {
  }


}

