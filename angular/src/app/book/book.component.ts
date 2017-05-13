import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from './book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  protected book: any;

  constructor(private route: ActivatedRoute, private bookService: BookService) { }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    this.bookService.getBook(id)
      .subscribe(
        book => {
          this.book = book;
        },
        err => console.error(err)
      );
  }

}
