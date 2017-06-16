import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import {MdButtonModule, MdCardModule, MdToolbarModule} from "@angular/material";
import {BooksComponent} from './books/books.component';
import {BookComponent} from './book/book.component';
import {BooksService} from "./books/books.service";
import {SpecialPipe} from "./book/special.pipe";

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookComponent,
    SpecialPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    MdToolbarModule,
    MdCardModule,
    MdButtonModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
