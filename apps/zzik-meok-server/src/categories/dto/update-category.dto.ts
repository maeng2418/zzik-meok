import { IsNotEmpty, IsString, MaxLength } from 'class-validator'

export class UpdateCategoryDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  name: string
}
