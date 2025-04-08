import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersService } from '../users/users.service';
import { Url } from './url.entity';

@Injectable()
export class UrlsService {
  constructor(
    @InjectRepository(Url)
    private UrlsRepository: Repository<Url>,
    private usersService: UsersService,
  ) {}

  async findAll(): Promise<Url[]> {
    return this.UrlsRepository.find();
  }

  async findByUserId(userId: number): Promise<Url[]> {
    return this.UrlsRepository.find({
      where: { userId },
      relations: ['user'],
    });
  }

  async findOne(id: number): Promise<Url> {
    const Url = await this.UrlsRepository.findOne({
      where: { id },
      relations: ['user'],
    });
    
    if (!Url) {
      throw new NotFoundException(`URL with ID ${id} not found`);
    }
    
    return Url;
  }

  async create(userId: number, url: string): Promise<Url> {
    // Check if user exists
    await this.usersService.findOne(userId);
    
    const Url = this.UrlsRepository.create({
      url,
      userId,
    });
    
    return this.UrlsRepository.save(Url);
  }

  async update(id: number, url: string): Promise<Url> {
    const Url = await this.findOne(id);
    Url.url = url;
    
    return this.UrlsRepository.save(Url);
  }

  async remove(id: number): Promise<void> {
    const Url = await this.findOne(id);
    await this.UrlsRepository.remove(Url);
  }
}