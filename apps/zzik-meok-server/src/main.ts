import { ValidationPipe } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import * as compression from 'compression'
import * as fs from 'fs'
import helmet from 'helmet'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
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

  // 보안 미들웨어 설정
  app.use(helmet())

  // 응답 압축 설정
  app.use(compression())

  // HTTPS 설정
  const httpsKeyPath = configService.get<string>('HTTPS_KEY_PATH')
  const httpsCertPath = configService.get<string>('HTTPS_CERT_PATH')

  if (httpsKeyPath && httpsCertPath) {
    const httpsOptions = {
      key: fs.readFileSync(httpsKeyPath),
      cert: fs.readFileSync(httpsCertPath),
    }
    app.enableCors({
      origin: configService.get<string[]>('ALLOWED_ORIGINS') || ['http://localhost:3000'],
      credentials: true,
      exposedHeaders: ['Authorization'],
    })
  }

  const hostname = configService.get<string>('API_SERVER_HOST_NAME')
  const port = configService.get<number>('API_SERVER_PORT') || 4000

  await app.listen(port, hostname)
}
bootstrap()
