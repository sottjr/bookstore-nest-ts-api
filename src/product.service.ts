import { Injectable } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()

export class ProductsService {
  private readonly products: Product[] = [
    new Product('LIV01', 'Livro TDD e BDD na prática', 29.9),
    new Product('LIV02', 'Livro Iniciando com Flutter', 39.9),
    new Product('LIV03', 'Inteligência artificial como serviço', 29.9),
  ];

  getAll(): Product[] {
    return this.products;
  }
  getOne(id: number): Product {
    return this.products[0];
  }
  create(product: Product) {
    this.products.push(product);
  }
  changeProduct(product: Product): Product {
    return product;
  }
  deleteProduct(id: number) {
    this.products.pop();
  }
}
