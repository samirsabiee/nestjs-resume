import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './article/article.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {mongodbConfig} from "../dbConfig/mongodb.config";
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [TypeOrmModule.forRoot(mongodbConfig), ArticleModule, CommentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
