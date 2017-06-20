import {Component, OnInit} from '@angular/core';
import {Book} from "./book.model";
import {BooksService} from "./books.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[];
  title = ' ';
  markedBookIndex = 0;
  index: number;
  close: any;


  constructor(private bookService: BooksService, private modalService: NgbModal) {
  }

  ngOnInit() {
    this.bookService.loadBooks()
      .subscribe(
        (book: Book[]) => {
          this.books = book;
        }
      );
  }

  onBookDeleted(index: number) {
    this.books.splice(index, 1);
  }

  onBookAdd(event) {
    this.books.push(event);
  }

  open(content) {
    this.close = this.modalService.open(content);
  }

  addnewBook(form: NgForm) {
    const newBook = new Book(form.value.author, form.value.date, form.value.title, '/assets/img/ng.png');
    this.books.push(newBook);
    this.close.close();
  }
}
