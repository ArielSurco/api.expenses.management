import { AppDataSource } from '../data-source'

import { User } from './User'

export class UserRepository {
  async create(user: User): Promise<User> {
    const savedUser = await AppDataSource.manager.save(user)

    return savedUser
  }

  async update(user: User): Promise<User> {
    const updatedUser = await AppDataSource.manager.save(user)

    return updatedUser
  }

  async delete(user: User): Promise<void> {
    user.isActive = false

    await AppDataSource.manager.save(user)
  }

  async findById(id: number): Promise<User | null> {
    const user = await AppDataSource.manager.findOne(User, {
      where: { id, isActive: true },
    })

    return user
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await AppDataSource.manager.findOne(User, {
      where: { email, isActive: true },
    })

    return user
  }
}
