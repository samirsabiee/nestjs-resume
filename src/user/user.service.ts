import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {UserRepository} from "./user.repository";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class UserService {
  constructor(@InjectRepository(UserRepository) private userRepository: UserRepository) {}
  create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  findAll() {
    return this.userRepository.find({relations: ['profile']});
  }

  findOne(id: number) {
    return this.userRepository.findOne(id, {relations: ['profile']});
  }

  findByUsername(username: string){
    return this.userRepository.findOne({username}, {relations: ['profile']});
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
