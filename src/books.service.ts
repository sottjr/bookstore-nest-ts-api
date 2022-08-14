import { Injectable } from '@nestjs/common';
import { Book } from './book.model';

@Injectable()

export class BooksService {
  private readonly books: Book[] = [
    // new Book('LIV01', 'Livro TDD e BDD na prática', 29.9),
    // new Book('LIV02', 'Livro Iniciando com Flutter', 39.9),
    // new Book('LIV03', 'Inteligência artificial como serviço', 29.9),
  ];

  getAll(): Book[] {
    return this.books;
  }
  getOne(id: number): Book {
    return this.books[0];
  }
  createBook(book: Book) {
    this.books.push(book);
  }
  changeBook(book: Book): Book {
    return book;
  }
  deleteBook(id: number) {
    this.books.pop();
  }
}
