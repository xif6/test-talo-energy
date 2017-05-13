import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BooksComponent } from './book/books.component';
import { BookService } from './book/book.service';
import { BookComponent } from './book/book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ModifyBookComponent } from './modify-book/modify-book.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookComponent,
    AddBookComponent,
    ModifyBookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
