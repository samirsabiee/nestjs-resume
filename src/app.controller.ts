import {Request, Controller, Get, UseGuards} from '@nestjs/common';
import { AppService } from './app.service';
import {JwtAuthGuard} from "./auth/jwt-auth.guard";
import {LocalAuthGuard} from "./auth/local-auth.guard";
import {AuthService} from "./auth/auth.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private authService: AuthService) {}

  @Get('login')
  @UseGuards(LocalAuthGuard)
  async login(@Request() req){
    return this.authService.login(req.user)
  }
}
