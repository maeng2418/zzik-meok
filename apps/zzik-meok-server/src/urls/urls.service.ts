import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UsersService } from '../users/users.service'
import { CreateUrlDto } from './dto/create-url.dto'
import { UpdateUrlDto } from './dto/update-url.dto'
import { Url } from './url.entity'

@Injectable()
export class UrlsService {
  constructor(
    @InjectRepository(Url)
    private urlsRepository: Repository<Url>,
    private usersService: UsersService,
  ) {}

  async findAll(): Promise<Url[]> {
    return this.urlsRepository.find({
      relations: ['category', 'user'],
    })
  }

  async findByUserId(userId: number): Promise<Url[]> {
    return this.urlsRepository.find({
      where: { user_id: userId },
      relations: ['category', 'user'],
      order: { created_at: 'DESC' },
    })
  }

  async findByCategoryId(categoryId: number): Promise<Url[]> {
    return this.urlsRepository.find({
      where: { category_id: categoryId },
      relations: ['category', 'user'],
      order: { created_at: 'DESC' },
    })
  }

  async findOne(id: number): Promise<Url> {
    const url = await this.urlsRepository.findOne({
      where: { id },
      relations: ['category', 'user'],
    })

    if (!url) {
      throw new NotFoundException(`URL with ID ${id} not found`)
    }

    return url
  }

  async create(createUrlDto: CreateUrlDto): Promise<Url> {
    // Check if user exists
    await this.usersService.findOne(createUrlDto.userId)

    const url = this.urlsRepository.create({
      url: createUrlDto.url,
      name: createUrlDto.name,
      description: createUrlDto.description,
      image_url: createUrlDto.imageUrl,
      user_id: createUrlDto.userId,
      category_id: createUrlDto.categoryId,
    })

    return this.urlsRepository.save(url)
  }

  async update(id: number, updateUrlDto: UpdateUrlDto): Promise<Url> {
    const url = await this.findOne(id)

    if (updateUrlDto.url) url.url = updateUrlDto.url
    if (updateUrlDto.name) url.name = updateUrlDto.name
    if (updateUrlDto.description !== undefined) url.description = updateUrlDto.description
    if (updateUrlDto.imageUrl !== undefined) url.image_url = updateUrlDto.imageUrl
    if (updateUrlDto.categoryId !== undefined) url.category_id = updateUrlDto.categoryId

    return this.urlsRepository.save(url)
  }

  async remove(id: number): Promise<void> {
    const url = await this.findOne(id)
    await this.urlsRepository.remove(url)
  }
}
