import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './article/article.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {mongodbConfig} from "../dbConfig/mongodb.config";
import { CommentModule } from './comment/comment.module';
import {postgresConfig} from "../dbConfig/postgrss.config";

@Module({
  imports: [TypeOrmModule.forRoot(postgresConfig), ArticleModule, CommentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
