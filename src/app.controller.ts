import {Request, Controller, Get, UseGuards, Post, Body} from '@nestjs/common';
import { AppService } from './app.service';
import {LocalAuthGuard} from "./auth/local-auth.guard";
import {AuthService} from "./auth/auth.service";
import {RegisterDto} from "./auth/dto/register.dto";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private authService: AuthService) {}

  @Get('login')
  @UseGuards(LocalAuthGuard)
  async login(@Request() req){
    return this.authService.login(req.user)
  }
  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto)
  }
}
