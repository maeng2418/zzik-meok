import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { Url } from '../urls/url.entity'
import { User } from '../users/user.entity'

@Entity('Categories')
export class Category {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  user_id: number

  @Column({ length: 100 })
  name: string

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User

  @OneToMany(() => Url, (url) => url.category)
  urls: Url[]

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
