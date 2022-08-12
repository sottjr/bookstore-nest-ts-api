import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('products')
export class Productscontroller {
  @Get()
  getAll(): string {
    return 'List of all products';
  }
  @Get(':id')
  getOne(@Param() params): string {
    return 'This is a product with id ' + params.id;
  }
  @Post()
  create(@Body() product): string {
    console.log(product);
    return 'Product created successfully';
  }
  @Put()
  changeProduct(@Body() product): string {
    console.log(product);
    return 'Product changed successfully';
  }
  @Delete(":id")
  deleteProduct(@Param() params): string {
    console.log(params);
    return `Product ${params.id} deleted successfully`;
  }
}
