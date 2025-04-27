import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity('Users')
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 50 })
  name: string

  @Column({ length: 20, unique: true })
  phone: string

  @Column({ length: 50, unique: true })
  userId: string

  @Column({ length: 255 })
  password: string

  @Column({ length: 100, unique: true })
  email: string

  @Column({ nullable: true })
  refresh_token: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
