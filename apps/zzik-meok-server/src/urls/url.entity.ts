import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'
import { User } from '../users/user.entity'

@Entity('urls')
export class Url {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 2000 })
  url: string

  @Column({ nullable: true })
  title: string

  @Column({ nullable: true })
  description: string

  @Column({ default: false })
  isBookmarked: boolean

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @Column()
  userId: number

  @ManyToOne(() => User, (user) => user.urls)
  @JoinColumn({ name: 'userId' })
  user: User
}
