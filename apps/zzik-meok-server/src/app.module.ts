import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { validationSchema } from './config/validationSchema'
import { UsersModule } from './users/users.module'
import { UrlsModule } from './urls/urls.module'
import { User } from './users/user.entity'
import { Url } from './urls/url.entity'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env.${process.env.NODE_ENV}`],
      isGlobal: true,
      validationSchema,
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'zzik-meok.sqlite',
      entities: [User, Url],
      synchronize: true,
    }),
    UsersModule,
    UrlsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
