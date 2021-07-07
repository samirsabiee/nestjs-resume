import {BaseEntity, Column, Entity, ObjectID, ObjectIdColumn, OneToMany} from "typeorm";
import {Comment} from "../../comment/entities/comment.entity";

@Entity('Article')
export class Article extends BaseEntity{
    @ObjectIdColumn()
    _id: ObjectID

    @Column()
    title: string

    @Column()
    author: string

    @Column()
    cover: string

    @Column()
    content: string

    @OneToMany(() => Comment, comment => comment.article)
    comments: Comment[]
}
