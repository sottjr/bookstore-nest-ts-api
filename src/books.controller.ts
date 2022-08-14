import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Book } from './book.model';
import { BooksService } from './books.service';
@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  async getAll():Promise<Book[]> {
    return this.booksService.getAll();
  }

  @Get(':id')
  async getOne(@Param() params): Promise<Book> {
    return this.booksService.getOne(params.id);
  }
  @Post()
  async createBook(@Body() book: Book) {
    this.booksService.createBook(book);
  }
  @Put()
  async changeBook(@Body() book: Book): Promise<[number, Book[]]> {
    return this.booksService.changeBook(book);
  }
  @Delete(':id')
  async deleteBook(@Param() params) {
    return this.booksService.deleteBook(params.id);

  }
}
