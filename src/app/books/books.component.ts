import {Component, OnInit} from '@angular/core';
import {Book} from "./book.model";
import {BooksService} from "./books.service";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[];
  markedBookIndex = 0;

  constructor(private bookService: BooksService) {
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

}
