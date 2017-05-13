import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './book/books.component';
import { BookComponent } from './book/book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ModifyBookComponent } from './modify-book/modify-book.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: BooksComponent,
      },
      {
        path: 'book/:id',
        component: BookComponent,
      },
      {
        path: 'modify-book/:id',
        component: ModifyBookComponent,
      },
      {
        path: 'add-book',
        component: AddBookComponent,
      },
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
