import { IsNumber, IsOptional, IsString, IsUrl, MaxLength } from 'class-validator'

export class UpdateUrlDto {
  @IsOptional()
  @IsUrl()
  url?: string

  @IsOptional()
  @IsString()
  @MaxLength(255)
  name?: string

  @IsOptional()
  @IsString()
  description?: string

  @IsOptional()
  @IsString()
  imageUrl?: string

  @IsOptional()
  @IsNumber()
  categoryId?: number
}
