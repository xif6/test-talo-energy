import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';

@Injectable()
export class BookService {

  constructor(protected http: Http) { }

  getBooks() {
    return this.http.get('http://127.0.0.1/api/v1/book')
      .map(books => {
        return books.json();
      })
      .catch(error => {
        return Observable.throw(error);
      });
  }

  getBook(id) {
    return this.http.get('http://127.0.0.1/api/v1/book/' + id)
      .map(book => {
        return book.json();
      })
      .catch(error => {
        return Observable.throw(error);
      });
  }

  addBook(book) {
    return this.http.post('http://127.0.0.1/api/v1/book', book)
      .catch(error => {
        return Observable.throw(error);
      });
  }

  deleteBook(id) {
    return this.http.delete('http://127.0.0.1/api/v1/book/' + id)
      .catch(error => {
        return Observable.throw(error);
      });
  }
}
