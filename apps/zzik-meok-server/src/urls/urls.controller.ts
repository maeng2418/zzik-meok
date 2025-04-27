import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Request,
  UseGuards,
} from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { CreateUrlDto } from './dto/create-url.dto'
import { UpdateUrlDto } from './dto/update-url.dto'
import { Url } from './url.entity'
import { UrlsService } from './urls.service'

@Controller('urls')
export class UrlsController {
  constructor(private readonly urlsService: UrlsService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll(): Promise<Url[]> {
    return this.urlsService.findAll()
  }

  @Get('user')
  @UseGuards(AuthGuard('jwt'))
  findMyUrls(@Request() req): Promise<Url[]> {
    return this.urlsService.findByUserId(req.user.userId)
  }

  @Get('user/:userId')
  @UseGuards(AuthGuard('jwt'))
  findUserUrls(@Param('userId', ParseIntPipe) userId: number): Promise<Url[]> {
    return this.urlsService.findByUserId(userId)
  }

  @Get('category/:categoryId')
  @UseGuards(AuthGuard('jwt'))
  findByCategoryId(@Param('categoryId', ParseIntPipe) categoryId: number): Promise<Url[]> {
    return this.urlsService.findByCategoryId(categoryId)
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Url> {
    return this.urlsService.findOne(id)
  }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createUrlDto: CreateUrlDto, @Request() req): Promise<Url> {
    createUrlDto.userId = req.user.userId
    return this.urlsService.create(createUrlDto)
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  update(@Param('id', ParseIntPipe) id: number, @Body() updateUrlDto: UpdateUrlDto): Promise<Url> {
    return this.urlsService.update(id, updateUrlDto)
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.urlsService.remove(id)
  }
}
