import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Book} from "../books/book.model";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
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
  closeResult: string;

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
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    console.log(this.closeResult);
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  addBook(form: NgForm) {
    const newBook = new Book(form.value.author, form.value.date, form.value.title, 'test');
    this.bookAdd.emit(newBook);
  }

}
