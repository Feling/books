import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Book} from "./book.model";
import {Http} from "@angular/http";

@Injectable()
export class BooksService {

  loadBooks(): Observable<Book[]> {
    return this.http.get('/assets/data/data.json')
      .map(res => {
        return res.json().map(book => {
          return new Book(
            book.author,
            book.date,
            book.title,
            book.cover
          );
        });
      });
  }

  constructor(private http: Http) {
  }

}
