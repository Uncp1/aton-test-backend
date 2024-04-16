import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { HashService } from 'src/hash/hash.service';
import { User } from 'src/users/user.schema';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
    private hashService: HashService,
  ) {}

  auth(user: User) {
    return {
      access_token: this.jwtService.sign(
        { sub: user._id },

        {
          expiresIn: '1d',
        },
      ),
    };
  }

  async validatePassword(login: string, receivedPassword: string) {
    const user = await this.usersService.findUser(login);
    if (!user) {
      return null;
    }

    const hashedPassword = await this.hashService.hash(receivedPassword);
    const isMatch = await this.hashService.verify(
      receivedPassword,
      hashedPassword,
    );
    const { password, ...result } = user;

    return isMatch ? result : null;
  }
}
