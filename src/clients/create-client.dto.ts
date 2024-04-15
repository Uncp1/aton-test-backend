import { IsString, Length, IsDate } from 'class-validator';

export class CreateClientDto {
  @IsString()
  @Length(2, 30)
  lastName: string;

  @IsString()
  @Length(2, 30)
  firstName: string;

  @IsString()
  @Length(2, 30)
  surname: string;

  @IsDate()
  @Length(2, 30)
  birthDate: string;

  @IsString()
  @Length(12)
  inn: string;

  @IsString()
  @Length(12)
  accountNumber: string;

  @IsDate()
  @Length(2, 120)
  responsibleUser: string;
}
