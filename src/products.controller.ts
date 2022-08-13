import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Product } from './product.model';
import { ProductsService } from './product.service';
@Controller('products')
export class Productscontroller {
  constructor(private productsService: ProductsService) {}

  @Get()
  getAll(): Product[] {
    return this.productsService.getAll();
  }

  @Get(':id')
  getOne(@Param() params): Product {
    return this.productsService.getOne(params.id);
  }
  @Post()
  create(@Body() product: Product) {
    return this.productsService.create(product);
  }
  @Put()
  changeProduct(@Body() product: Product): Product {
    return this.productsService.changeProduct(product);
  }
  @Delete(':id')
  deleteProduct(@Param() params) {
    return this.productsService.deleteProduct(params.id);

  }
}
