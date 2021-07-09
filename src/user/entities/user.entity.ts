import {BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Profile} from "./profile.entity";

@Entity('User')
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    username: string

    @Column()
    password: string
    
    @OneToOne(() => Profile)
    @JoinColumn()
    profile: Profile
}
