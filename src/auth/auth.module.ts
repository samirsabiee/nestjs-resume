import {Module} from '@nestjs/common';
import {AuthService} from './auth.service';
import {UsersModule} from "../users/users.module";
import {JwtModule} from "@nestjs/jwt";
import {PassportModule} from "@nestjs/passport";
import {jwtConstants} from "./constants";
import {JwtStrategy} from "./jwt.strategy";
import {LocalStrategy} from "./local.strategy";

@Module({
    imports: [UsersModule, PassportModule, JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: {expiresIn: '3600s'}
    })],
    providers: [AuthService,LocalStrategy, JwtStrategy],
    exports:[AuthService]
})
export class AuthModule {
}
