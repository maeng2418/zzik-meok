import { Controller, Post, Body, Param, Get, BadRequestException } from '@nestjs/common';
import { UsersService } from './users.service';
import { userSchema } from './user.schema';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() createUserDto: { name: string; email: string; password: string }) {
    const { error } = userSchema.validate(createUserDto);
    if (error) {
      throw new BadRequestException(error.details[0].message);
    }
    return this.usersService.createUser(createUserDto.name, createUserDto.email, createUserDto.password);
  }

  @Post(':id/urls')
  async addUrl(@Param('id') id: number, @Body('url') url: string) {
    return this.usersService.addUrlToUser(id, url);
  }

  @Get(':id/urls')
  async getUserUrls(@Param('id') id: number) {
    return this.usersService.getUserUrls(id);
  }
}
