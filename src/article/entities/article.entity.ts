import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Comment} from "../../comment/entities/article.comment.entity";

@Entity('Article')
export class Article extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    title: string

    @Column()
    author: string

    @Column()
    cover: string

    @Column()
    content: string

    @OneToMany(() => Comment, comment => comment.article, {eager: true})
    comments: Comment[]
}
