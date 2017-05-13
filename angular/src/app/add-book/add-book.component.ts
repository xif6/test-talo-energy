import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../book/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  protected form: FormGroup;

  constructor(private formBuilder: FormBuilder, private bookService: BookService,) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      'title': ['', Validators.required],
      'content': ['', Validators.required],
    });
  }

  submit() {
    this.bookService.addBook(this.form.value)
      .subscribe(
        () => {
          this.form.reset();
        },
        err => console.error(err)
      );
  }
}
