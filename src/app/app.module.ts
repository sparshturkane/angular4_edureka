import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { MovieslistService } from './services/movieslist/movieslist.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MovieslistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
