import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Book } from './book.model';

@Injectable()
export class BooksService {
  constructor(
    @InjectModel(Book)
    private bookModel: typeof Book
  ) {}

  async getAll(): Promise <Book[]> {
    return this.bookModel.findAll();
  }

  async getOne(id: number): Promise<Book> {
    return this.bookModel.findByPk(id);

    // return this.bookModel.findOne({
    //   where: {
    //     id,
    //   },
    // });
  }

  async createBook(book: Book) {
    this.bookModel.create(Book);
  }
  async changeBook(book: Book): Promise<[number, Book[]]> {
    return this.bookModel.update(book, {
      where: {
        id: book.id,
      },
    });
  }
  async deleteBook(id: number) {
    const book: Book = await this.getOne(id);
    book.destroy();

  }
}
