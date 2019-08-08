import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonService } from './common.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { HotelsComponent } from './pages/hotels/hotels.component';
import { FoodComponent } from './pages/food/food.component';
import { TodoComponent } from './pages/todo/todo.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { RsvpComponent } from './pages/rsvp/rsvp.component';
import { HomeComponent } from './pages/home/home.component';
import { NavComponent } from './pages/nav/nav.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { TimerComponent } from './pages/timer/timer.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    HotelsComponent,
    FoodComponent,
    TodoComponent,
    GalleryComponent,
    RsvpComponent,
    HomeComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
