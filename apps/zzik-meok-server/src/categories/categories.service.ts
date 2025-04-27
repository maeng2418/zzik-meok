import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Category } from './category.entity'
import { CreateCategoryDto } from './dto/create-category.dto'
import { UpdateCategoryDto } from './dto/update-category.dto'

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const category = this.categoryRepository.create({
      user_id: createCategoryDto.userId,
      name: createCategoryDto.name,
    })
    return await this.categoryRepository.save(category)
  }

  async findAll(userId: number): Promise<Category[]> {
    return await this.categoryRepository.find({
      where: { user_id: userId },
      order: { created_at: 'DESC' },
    })
  }

  async findOne(id: number): Promise<Category> {
    return await this.categoryRepository.findOne({
      where: { id },
      relations: ['urls'],
    })
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<Category> {
    await this.categoryRepository.update(id, {
      name: updateCategoryDto.name,
    })
    return await this.findOne(id)
  }

  async remove(id: number): Promise<void> {
    await this.categoryRepository.delete(id)
  }
}
