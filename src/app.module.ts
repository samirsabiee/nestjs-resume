import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './article/article.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import { CommentModule } from './comment/comment.module';
import {postgresConfig} from "../dbConfig/postgrss.config";
import { UserModule } from './user/user.module';
import {AuthModule} from "./auth/auth.module";

@Module({
  imports: [TypeOrmModule.forRoot(postgresConfig), ArticleModule, CommentModule, UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
