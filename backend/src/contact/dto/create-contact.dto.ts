import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class CreateContactDto {
  @IsNotEmpty()
  @MaxLength(80)
  firstName!: string;

  @IsNotEmpty()
  @MaxLength(80)
  lastName!: string;

  @IsEmail()
  email!: string;

  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(2000)
  message!: string;
}
