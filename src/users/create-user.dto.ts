import { IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(2, 120)
  username: string;

  @IsString()
  @Length(2, 120)
  login: string;

  @IsString()
  @Length(2, 120)
  password: string;
}
