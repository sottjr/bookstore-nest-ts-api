import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsService } from './product.service';
import { Productscontroller } from './products.controller';

@Module({
  imports: [],
  controllers: [AppController, Productscontroller],
  providers: [AppService, ProductsService],
})
export class AppModule {}
