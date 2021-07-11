import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import {Article} from "./entities/article.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {ArticleRepository} from "./article.repository";

@Injectable()
export class ArticleService {
  constructor(@InjectRepository(ArticleRepository) private articleRepository: ArticleRepository) {
  }
  async create(createArticleDto: CreateArticleDto): Promise<Article> {
    return this.articleRepository.save(createArticleDto);
  }

  findAll() {
    return this.articleRepository.find({relations:['comments']});
  }

  findOne(id: string) {
    return this.articleRepository.findOne(id,{relations:['comments']});
  }

  async update(id: string, updateArticleDto: UpdateArticleDto): Promise<Article>{
    await this.articleRepository.update(id,updateArticleDto);
    return this.articleRepository.findOne(id)
  }

  remove(id: string) {
    return this.articleRepository.delete(id);
  }
}
