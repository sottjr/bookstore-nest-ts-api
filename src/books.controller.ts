import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Book } from './book.model';
import { BooksService } from './books.service';
@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  getAll(): Book[] {
    return this.booksService.getAll();
  }

  @Get(':id')
  getOne(@Param() params): Book {
    return this.booksService.getOne(params.id);
  }
  @Post()
  createBook(@Body() book: Book) {
    return this.booksService.createBook(book);
  }
  @Put()
  changeBook(@Body() book: Book): Book {
    return this.booksService.changeBook(book);
  }
  @Delete(':id')
  deleteBook(@Param() params) {
    return this.booksService.deleteBook(params.id);

  }
}
