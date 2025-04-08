import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UrlsService } from './urls.service';
import { Url } from './url.entity';
import { UsersModule } from '../users/users.module';
import { UrlsController } from './urls.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Url]),
    UsersModule,
  ],
  controllers: [UrlsController],
  providers: [UrlsService],
  exports: [UrlsService],
})
export class UrlsModule {}