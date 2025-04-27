import { IsNotEmpty, IsNumber, IsOptional, IsString, IsUrl, MaxLength } from 'class-validator'

export class CreateUrlDto {
  @IsNotEmpty()
  @IsNumber()
  userId: number

  @IsOptional()
  @IsNumber()
  categoryId?: number

  @IsNotEmpty()
  @IsUrl()
  url: string

  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  name: string

  @IsOptional()
  @IsString()
  description?: string

  @IsOptional()
  @IsString()
  imageUrl?: string
}
