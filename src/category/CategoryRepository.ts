import { IsNull } from 'typeorm'

import { AppDataSource } from '../data-source'

import { Category } from './Category'

interface Constructor {
  relations?: 'user'[]
}

export class CategoryRepository {
  relations: Constructor['relations']

  constructor({ relations }: Constructor = {}) {
    this.relations = relations
  }

  async create(category: Category): Promise<Category> {
    const savedCategory = await AppDataSource.manager.save(category)

    return savedCategory
  }

  async update(category: Category): Promise<Category> {
    const updatedCategory = await AppDataSource.manager.save(category)

    return updatedCategory
  }

  async delete(category: Category): Promise<void> {
    if (category.user !== null) {
      await AppDataSource.manager.delete(Category, category.id)
    } else {
      throw new Error('Cannot delete a default category')
    }
  }

  async findAllByUserId(userId: number): Promise<Category[]> {
    const categories = await AppDataSource.manager.find(Category, {
      where: [{ user: { id: userId } }, { user: IsNull() }],
      relations: this.relations,
    })

    return categories
  }
}
