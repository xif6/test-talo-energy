import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';

@Component({
  selector: 'app-book',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  protected books: any;

  constructor(protected bookService: BookService) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.bookService.getBooks()
      .subscribe(
        books => {
          this.books = books;
        },
        err => console.error(err)
      );
  }

  deleteBook(id) {
    this.bookService.deleteBook(id)
      .subscribe(
        () => {
          this.getBooks();
        },
        err => console.error(err)
      );
  }

}
