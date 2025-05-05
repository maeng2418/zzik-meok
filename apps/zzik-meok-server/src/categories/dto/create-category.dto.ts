import { IsNotEmpty, IsString, MaxLength } from 'class-validator'

export class CreateCategoryDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  name: string
}
