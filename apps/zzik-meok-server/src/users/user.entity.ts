import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Url } from '../urls/url.entity'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  password: string

  @OneToMany(() => Url, (url) => url.user)
  urls: Url[]

  @Column()
  createdAt: Date

  @Column()
  updatedAt: Date
}