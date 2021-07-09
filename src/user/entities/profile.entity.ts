import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('Profile')
export class Profile extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    email: string

    @Column()
    mobile: string

    @Column()
    bio: string

    @Column()
    avatar: string
}
