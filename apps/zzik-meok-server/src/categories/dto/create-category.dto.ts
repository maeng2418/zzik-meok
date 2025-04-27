import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator'

export class CreateCategoryDto {
  @IsNotEmpty()
  @IsNumber()
  userId: number

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  name: string
}
