import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import { CreateUserDto } from './dto/create-user.dto'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async createUser(@Body() createUserDto: CreateUserDto) {
    // 이메일 중복 확인
    const emailExists = await this.usersService.findByEmail(createUserDto.email)
    if (emailExists) {
      throw new BadRequestException('이미 사용중인 이메일입니다.')
    }

    // 사용자명 중복 확인
    const userIdExists = await this.usersService.findByUserId(createUserDto.userId)
    if (userIdExists) {
      throw new BadRequestException('이미 사용중인 아이디입니다.')
    }

    return this.usersService.createUser(createUserDto)
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Request() req) {
    const user = await this.usersService.findOne(req.user.userId)
    const { password, refresh_token, ...result } = user
    return result
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getUserById(@Param('id') id: number) {
    const user = await this.usersService.findOne(id)
    const { password, refresh_token, ...result } = user
    return result
  }
}
