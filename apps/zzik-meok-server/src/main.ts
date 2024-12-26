import { NestFactory } from '@nestjs/core'
import * as fs from 'fs'
import { AppModule } from './app.module'

async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync('../../private-key.pem'),
    cert: fs.readFileSync('../../public-certificate.pem'),
  }
  const app = await NestFactory.create(AppModule, {
    httpsOptions,
  })
  app.enableCors({
    origin: true, // * 허용할 도메인 추가. eg. [http://localhost:3000, https://localhost:3000]
    credentials: true,
    exposedHeaders: ['Authorization'], // * 사용할 헤더 추가.
  })
  await app.listen(4000)
}
bootstrap()
