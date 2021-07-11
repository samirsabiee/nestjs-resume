import {Injectable} from '@nestjs/common';
import {CreateUserDto} from './dto/create-user.dto';
import {UpdateUserDto} from './dto/update-user.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {UsersRepository} from "./users.repository";
import {Connection} from "typeorm";

@Injectable()
export class UsersService {
    private usersRepository: UsersRepository
  constructor(private readonly connection: Connection) {
        this.usersRepository = this.connection.getCustomRepository(UsersRepository)
  }

    async create(createUserDto: CreateUserDto) {
        return this.usersRepository.save(createUserDto);
    }

    findAll() {
        return this.usersRepository.find({relations: ['profile']});
    }

    findOne(id: number) {
        return this.usersRepository.findOne(id, {relations: ['profile']});
    }

    findByUsername(username: string) {
        return this.usersRepository.findOne({username}, {relations: ['profile']})
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        return this.usersRepository.update(id, updateUserDto);
    }

    remove(id: number) {
        return this.usersRepository.delete(id);
    }
}
