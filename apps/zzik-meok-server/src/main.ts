import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import * as fs from 'fs'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const configService = app.get(ConfigService)

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
