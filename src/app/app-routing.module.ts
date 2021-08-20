import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { FormComponent } from './components/form/form.component';
const routes: Routes = [
  {
    path:"list",
    component:TableComponent
  },
  {
    path:"create",
    component:FormComponent
  },
  {
    path:"update/{id}",
    component:FormComponent
  },
  {
    path:"delete/{id}",
    component:FormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
