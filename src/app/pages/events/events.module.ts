import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { MaterialModule } from 'src/app/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [EventsComponent],
  imports: [
    CommonModule,
    EventsRoutingModule,
    MaterialModule,
    RouterModule
  ]
})
export class EventsModule { }
