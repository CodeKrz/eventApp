import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { HotelsComponent } from './pages/hotels/hotels.component';
import { FoodComponent } from './pages/food/food.component';
import { TodoComponent } from './pages/todo/todo.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { RsvpComponent } from './pages/rsvp/rsvp.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'hotels', component: HotelsComponent },
  { path: 'food', component: FoodComponent },
  { path: 'toDo', component: TodoComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'rsvp', component: RsvpComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
