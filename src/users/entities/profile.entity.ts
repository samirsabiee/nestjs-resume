import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('Profile')
export class Profile extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: string

    @Column({nullable:true})
    email: string

    @Column({nullable:true})
    mobile: string

    @Column({nullable:true})
    bio: string

    @Column({nullable:true})
    avatar: string
}
