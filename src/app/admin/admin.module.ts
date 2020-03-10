import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { MaterialModule } from '../material.module';
import { TableComponent } from '../shared/table/table.component';
import { TablesubComponent } from '../shared/tablesub/tablesub.component';



@NgModule({
  declarations: [AdminComponent, TableComponent, TablesubComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule
  ]
})
export class AdminModule { }
