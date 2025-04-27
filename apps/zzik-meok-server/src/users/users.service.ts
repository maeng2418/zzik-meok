import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import * as bcrypt from 'bcrypt'
import { Repository } from 'typeorm'
import { CreateUserDto } from './dto/create-user.dto'
import { User } from './user.entity'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10)

    const user = this.usersRepository.create({
      name: createUserDto.name,
      phone: createUserDto.phone,
      userId: createUserDto.userId,
      email: createUserDto.email,
      password: hashedPassword,
    })
    return this.usersRepository.save(user)
  }

  async findOne(id: number): Promise<User> {
    const user = await this.usersRepository.findOne({
      where: { id },
    })
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`)
    }
    return user
  }

  async findByUserId(userId: string): Promise<User | undefined> {
    return await this.usersRepository.findOne({
      where: { userId },
    })
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return await this.usersRepository.findOne({
      where: { email },
    })
  }

  async getUserWithCategories(userId: number): Promise<User> {
    const user = await this.usersRepository.findOne({
      where: { id: userId },
    })
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`)
    }
    return user
  }
}
