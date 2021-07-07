import {BaseEntity, Column, Entity, ManyToOne, ObjectID, ObjectIdColumn} from "typeorm";
import {Article} from "../../article/entities/article.entity";

@Entity('Comment')
export class Comment extends BaseEntity{
    @ObjectIdColumn()
    _id: ObjectID

    @Column()
    writer: string

    @Column()
    comment: string

    @ManyToOne(() => Article, article => article.comments)
    article: Article
}
