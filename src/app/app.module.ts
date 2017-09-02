import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { MovieslistService } from './services/movieslist/movieslist.service';
import { BoldDirective } from './directives/bold/bold.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    BoldDirective
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [MovieslistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
