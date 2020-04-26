import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventComponent } from './event/event.component';
import { EventsComponent } from './events.component';

const routes: Routes = [
  { path: '', component: EventsComponent }
];

@NgModule({
  declarations: [
    EventsComponent,
    EventComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class EventsModule { }
