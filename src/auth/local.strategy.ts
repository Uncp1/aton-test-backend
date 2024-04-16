import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'login', // doesnt work without it
      passwordField: 'password',
    });
  }

  async validate(login: string, password: string) {
    const user = await this.authService.validatePassword(login, password);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
