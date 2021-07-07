import {Column, Entity, ObjectID, ObjectIdColumn} from "typeorm";

@Entity('Article')
export class Article {
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
}
