import {BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Article} from "../../article/entities/article.entity";

@Entity('Comment')
export class Comment extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    writer: string

    @Column()
    comment: string

    @ManyToOne(() => Article, article => article.comments, {onDelete:"CASCADE"})
    article: Article

}
