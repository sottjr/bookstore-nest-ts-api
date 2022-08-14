import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Book } from './book.model';

@Module({
  imports: [
  SequelizeModule.forRoot({
      dialect: 'mysql', // dialeto do banco de dados
      host: 'localhost', // endereço do servidor do banco de dados
      port: 3306, // porta do banco de dados. A porta padrão é 3306, mas estou usando 3307 por conflitos na minha máquina
      username: 'root', // usuário do MySQL
      password: 'mysql', // senha do usuário do MySQL
      database: 'bookstore',
      models: [Book], // modelos do Sequelize
      // autoLoadModels: true,
      // synchronize: true,  
    }),
    SequelizeModule.forFeature([ Book ])
  ],
  controllers: [AppController, BooksController],
  providers: [AppService, BooksService],
})
export class AppModule {}
