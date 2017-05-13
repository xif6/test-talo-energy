import { Component, OnInit } from '@angular/core';
import { BookService } from '../book/book.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modify-book',
  templateUrl: './modify-book.component.html',
  styleUrls: ['./modify-book.component.css']
})
export class ModifyBookComponent implements OnInit {

  protected form: FormGroup;
  protected book: any;


  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private bookService: BookService,) { }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    this.bookService.getBook(id)
      .subscribe(
        book => {
          this.book = book;
          this.form = this.formBuilder.group({
            'title': [this.book.title, Validators.required],
            'content': [this.book.content, Validators.required],
          });
        },
        err => console.error(err)
      );

  }

  submit() {
/*
    this.bookService.modifyBook(this.form.value)
      .subscribe(
        () => {
          this.form.reset();
        },
        err => console.error(err)
      );
*/
  }

}
