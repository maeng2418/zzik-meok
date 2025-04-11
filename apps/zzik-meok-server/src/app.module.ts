import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { dataSourceOptions, ENV_PATH } from '../data-source'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { validationSchema } from './config/validationSchema'
import { UrlsModule } from './urls/urls.module'
import { UsersModule } from './users/users.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [ENV_PATH],
      isGlobal: true,
      validationSchema,
    }),
    TypeOrmModule.forRoot({ ...dataSourceOptions }),
    UsersModule,
    UrlsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
