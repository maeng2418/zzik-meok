import * as dotenv from 'dotenv'
import { DataSource } from 'typeorm'

export const ENV_PATH = `.env.${process.env.NODE_ENV}`

dotenv.config({
  path: ENV_PATH,
})

export const dataSourceOptions = {
  type: 'mysql' as const,
  host: process.env.NEST_DATABASE_HOST,
  port: Number(process.env.NEST_DATABASE_PORT),
  username: process.env.NEST_DATABASE_USERNAME,
  password: process.env.NEST_DATABASE_PASSWORD,
  database: process.env.NEST_DATABASE_NAME,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: process.env.NEST_DATABASE_SYNCHRONIZE === 'true', // true인 경우, 서버가 구동될 때마다 테이블이 자동으로 생김. (개발 환경에서만 사용)
  migrationsRun: false, // 서버가 구동될 때 작성된 마이그레이션 파일을 기반으로 마이그레이션을 수행하게 할지 설정하는 옵션. (false로 설정하여 CLI 명령어로 직접 입력하도록 함.)
  migrations: [__dirname + '/**/migrations/*{.ts,.js}'], // 마이그레이션 수행할 파일이 관리되는 경로
  migrationsTableName: 'migrations', // 마이그레이션 이력이 기록되는 테이블 이름 (기본값: 'migrations')
}

export const AppDataSource = new DataSource({ ...dataSourceOptions })
