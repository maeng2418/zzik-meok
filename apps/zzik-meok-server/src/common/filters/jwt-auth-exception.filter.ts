import { ArgumentsHost, Catch, ExceptionFilter, UnauthorizedException } from '@nestjs/common'
import { Response } from 'express'

@Catch(UnauthorizedException)
export class JwtAuthExceptionFilter implements ExceptionFilter {
  catch(exception: UnauthorizedException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()
    const status = exception.getStatus()

    // JWT 인증 실패 메시지
    response.status(status).json({
      statusCode: status,
      code: 'UNAUTHORIZED',
      reason: '인증에 실패했습니다. 유효한 토큰이 필요합니다.',
      timestamp: new Date().toISOString(),
    })
  }
}
