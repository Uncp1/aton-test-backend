import { PartialType } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';
import { CreateUserDto } from 'src/users/create-user.dto';

export class UpdateClientDto extends PartialType(CreateUserDto) {
  @IsString()
  @Length(2, 30)
  status: 'Не в работе' | 'В работе' | 'Завершен';
}
