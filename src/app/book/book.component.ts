import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Book} from "../books/book.model";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book: Book;
  @Input() index: number;
  @Output() bookDeleted = new EventEmitter<void>();
  @Output() bookAdd = new EventEmitter<Book>();
  close: any;

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
  }

  onDelete() {
    this.bookDeleted.emit();
  }

  editBook(form: NgForm) {
    this.book.author = form.value.author;
    this.book.date = form.value.date;
    this.book.title = form.value.title;
    this.close.close();
  }

  open(content) {
    this.close = this.modalService.open(content);
  }


  /*
  addBook(form: NgForm) {
    const newBook = new Book(form.value.author, form.value.date, form.value.title, 'test');
    this.bookAdd.emit(newBook);
    this.close.close();
   }*/

}
