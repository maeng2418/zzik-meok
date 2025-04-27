import { Injectable, UnauthorizedException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import { InjectRepository } from '@nestjs/typeorm'
import * as bcrypt from 'bcrypt'
import { Repository } from 'typeorm'
import { User } from '../users/user.entity'
import { UsersService } from '../users/users.service'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async validateUser(userId: string, password: string): Promise<any> {
    const user = await this.usersService.findByUserId(userId)

    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user
      return result
    }

    return null
  }

  async login(user: any) {
    const tokens = await this.getTokens(user.id, user.userId)
    await this.updateRefreshToken(user.id, tokens.refreshToken)

    return {
      user: {
        id: user.id,
        userId: user.userId,
        name: user.name,
        email: user.email,
      },
      ...tokens,
    }
  }

  async refreshTokens(userId: number, refreshToken: string) {
    const user = await this.usersService.findOne(userId)

    if (!user || !user.refresh_token) {
      throw new UnauthorizedException('Access Denied')
    }

    const refreshTokenMatches = await bcrypt.compare(refreshToken, user.refresh_token)

    if (!refreshTokenMatches) {
      throw new UnauthorizedException('Access Denied')
    }

    const tokens = await this.getTokens(user.id, user.userId)
    await this.updateRefreshToken(user.id, tokens.refreshToken)

    return tokens
  }

  async getTokens(userId: number, userIdString: string) {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: userId,
          userId: userIdString,
        },
        {
          secret: this.configService.get<string>('NEST_JWT_SECRET'),
          expiresIn: this.configService.get<string>('NEST_JWT_EXPIRATION_TIME'),
        },
      ),
      this.jwtService.signAsync(
        {
          sub: userId,
          userId: userIdString,
        },
        {
          secret: this.configService.get<string>('NEST_JWT_REFRESH_SECRET'),
          expiresIn: this.configService.get<string>('NEST_JWT_REFRESH_EXPIRATION_TIME'),
        },
      ),
    ])

    return {
      accessToken,
      refreshToken,
    }
  }

  async updateRefreshToken(userId: number, refreshToken: string) {
    const hashedRefreshToken = await bcrypt.hash(refreshToken, 10)
    await this.usersRepository.update(userId, {
      refresh_token: hashedRefreshToken,
    })
  }

  async logout(userId: number) {
    await this.usersRepository.update(userId, {
      refresh_token: null,
    })
  }
}
