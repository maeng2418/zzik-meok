import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { Category } from '../categories/category.entity'
import { User } from '../users/user.entity'

@Entity('URLs')
export class Url {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'text' })
  url: string

  @Column({ length: 255 })
  name: string

  @Column({ type: 'text', nullable: true })
  description: string

  @Column({ type: 'text', nullable: true })
  image_url: string

  @Column()
  user_id: number

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User

  @Column({ nullable: true })
  category_id: number

  @ManyToOne(() => Category, (category) => category.urls, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'category_id' })
  category: Category

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
