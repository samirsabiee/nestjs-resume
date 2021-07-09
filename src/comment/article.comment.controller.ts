import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ArticleCommentService } from './article.comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@Controller('comment/article')
export class ArticleCommentController {
  constructor(private readonly articleCommentService: ArticleCommentService) {}

  @Post(':articleId')
  create(@Param('articleId') articleId: string, @Body() createCommentDto: CreateCommentDto) {
    return this.articleCommentService.create(articleId,createCommentDto);
  }

  @Get()
  findAll() {
    return this.articleCommentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articleCommentService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.articleCommentService.remove(+id);
  }
}
