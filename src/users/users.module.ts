import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "./entities/user.entity";
import {Profile} from "./entities/profile.entity";
import {UsersController} from "./users.controller";
import {ProfileController} from "./profile.controller";
import {UsersService} from "./users.service";
import {ProfileService} from "./profile.service";
import {UsersRepository} from "./users.repository";

@Module({
    imports:[TypeOrmModule.forFeature([User,Profile])],
    controllers:[UsersController,ProfileController],
    providers:[UsersService, UsersRepository, ProfileService],
    exports:[UsersService]
})
export class UsersModule {}
