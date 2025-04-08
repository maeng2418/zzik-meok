import { Controller, Get, Post, Body, Param, Delete, Put, ParseIntPipe } from '@nestjs/common';
import { UrlsService } from './urls.service';
import { Url } from './url.entity';

@Controller('user-urls')
export class UrlsController {
  constructor(private readonly UrlsService: UrlsService) {}

  @Get()
  findAll(): Promise<Url[]> {
    return this.UrlsService.findAll();
  }

  @Get('user/:userId')
  findByUserId(@Param('userId', ParseIntPipe) userId: number): Promise<Url[]> {
    return this.UrlsService.findByUserId(userId);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Url> {
    return this.UrlsService.findOne(id);
  }

  @Post('user/:userId')
  create(
    @Param('userId', ParseIntPipe) userId: number,
    @Body('url') url: string,
  ): Promise<Url> {
    return this.UrlsService.create(userId, url);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body('url') url: string,
  ): Promise<Url> {
    return this.UrlsService.update(id, url);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.UrlsService.remove(id);
  }
}