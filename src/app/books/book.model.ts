export class Book {
  author: string;
  date: any;
  title: string;
  cover?: string;

  constructor(author: string, date: string, title: string, cover: string) {
    this.author = author;
    this.date = new Date(date);
    this.title = title;
    this.cover = cover;
  }
}
