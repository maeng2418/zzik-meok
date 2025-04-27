import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator'

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  name: string

  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  phone: string

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  userId: string

  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  password: string

  @IsNotEmpty()
  @IsEmail()
  @MaxLength(100)
  email: string
}
