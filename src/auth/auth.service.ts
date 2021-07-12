import {BadRequestException, Injectable} from '@nestjs/common';
import {JwtService} from "@nestjs/jwt";
import {UserService} from "../user/user.service";
import {RegisterDto} from "./dto/register.dto";
import * as bcryptJs from 'bcryptjs'

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) {
    }

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.userService.findByUsername(username)
        if (user && this.compareHashPassword(password, user.password)) {
            const {password, ...result} = user
            return result
        }
        throw new BadRequestException('Invalid username or password')
    }

    async login(user: any): Promise<any> {
        const payload = {username: user.username, sub: user.userId}
        return {
            access_token: this.jwtService.sign(payload)
        }
    }

    async register(registerDto: RegisterDto) {
        const {password, confirmPassword} = registerDto
        if (this.isSamePassword(password, confirmPassword)) {
            registerDto.password = this.hashPassword(password)
            delete registerDto.confirmPassword
            return await this.userService.create(registerDto)
        } else {
            throw new BadRequestException()
        }

    }

    hashPassword(password) {
        return bcryptJs.hashSync(password, bcryptJs.genSaltSync(10))
    }

    compareHashPassword(password, hashPassword) {
        return bcryptJs.compareSync(password, hashPassword)
    }

    isSamePassword(password, confirmPassword) {
        return password === confirmPassword
    }
}
