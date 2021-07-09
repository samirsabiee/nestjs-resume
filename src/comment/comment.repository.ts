import {EntityRepository, Repository} from "typeorm";
import {Comment} from "./entities/article.comment.entity";
@EntityRepository(Comment)
export class CommentRepository extends Repository<Comment>{

}
