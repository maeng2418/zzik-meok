import { Injectable, UnauthorizedException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PassportStrategy } from '@nestjs/passport'
import { Request } from 'express'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { UsersService } from '../../users/users.service'

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
  constructor(
    private configService: ConfigService,
    private usersService: UsersService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get<string>('NEST_JWT_REFRESH_SECRET'),
      passReqToCallback: true,
    })
  }

  async validate(req: Request, payload: any) {
    const refreshToken = req.headers.authorization.replace('Bearer ', '').trim()

    const user = await this.usersService.findOne(payload.sub)

    if (!user || !user.refresh_token) {
      throw new UnauthorizedException('Access Denied')
    }

    return {
      ...payload,
      refreshToken,
    }
  }
}
