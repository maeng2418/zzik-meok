import { ValidationPipe } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import * as compression from 'compression'
import { rateLimit } from 'express-rate-limit'
import * as fs from 'fs'
import helmet from 'helmet'
import { AppModule } from './app.module'
import { JwtAuthExceptionFilter } from './common/filters/jwt-auth-exception.filter'

const bootstrap = async () => {
  // HTTPS 설정
  const httpsOptions = {
    key: fs.readFileSync('../../private-key.pem'),
    cert: fs.readFileSync('../../public-certificate.pem'),
  }
  const app = await NestFactory.create(AppModule, {
    logger:
      process.env.NODE_ENV === 'production'
        ? ['error', 'warn'] // 프로덕션 환경에서는 에러와 경고만 로깅
        : ['error', 'warn', 'log', 'debug', 'verbose'], // 개발 환경에서는 모든 로그 레벨 활성화
    bufferLogs: true, // 로그 버퍼링 활성화
    httpsOptions,
  })
  const configService = app.get(ConfigService)

  // 전역 파이프 설정
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // DTO에 정의되지 않은 속성 제거
      forbidNonWhitelisted: true, // DTO에 정의되지 않은 속성이 있으면 요청 거부
      transform: true, // 요청 데이터 자동 형변환
      transformOptions: {
        enableImplicitConversion: true, // 암시적 형변환 활성화
      },
    }),
  )

  // JWT 인증 예외 필터 등록
  app.useGlobalFilters(new JwtAuthExceptionFilter())

  // 보안 미들웨어 설정
  app.use(helmet())

  // 응답 압축 설정
  app.use(compression())

  // Rate limiting 설정
  app.use(
    rateLimit({
      windowMs: configService.get<number>('NEST_RATE_LIMIT_TTL') * 1000, // 기본값: 60초
      max: configService.get<number>('NEST_RATE_LIMIT_MAX'), // 기본값: 100 요청
    }),
  )

  app.enableCors({
    origin: (origin, callback) => {
      if (
        !origin || // same-origin (e.g., mobile app, curl)
        configService.get<string[]>('NEST_ALLOWED_ORIGINS') ||
        ['http://localhost'].some((allowedOrigin) => origin.startsWith(allowedOrigin))
      ) {
        callback(null, true)
      } else {
        callback(new Error('CORS 정책에 의해 차단됨'))
      }
    },
    optionsSuccessStatus: 200,
    credentials: true,
    exposedHeaders: ['Authorization'],
  })

  const hostname = configService.get<string>('NEST_API_SERVER_HOST_NAME')
  const port = configService.get<number>('NEST_API_SERVER_PORT') || 4000
  const apiRoutePath = configService.get<string>('NEST_API_ROUTE_PATH') || 'api'

  app.setGlobalPrefix(apiRoutePath)

  await app.listen(port, hostname)
}

bootstrap()
