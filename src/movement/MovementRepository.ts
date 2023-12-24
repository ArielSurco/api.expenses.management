import { AppDataSource } from '../data-source'

import { Movement } from './Movement'

interface Constructor {
  relations?: ('user' | 'account' | 'category')[]
}

export class MovementRepository {
  relations: Constructor['relations']

  constructor({ relations }: Constructor = {}) {
    this.relations = relations
  }

  async create(movement: Movement): Promise<Movement> {
    const savedMovement = await AppDataSource.manager.save(movement)

    return savedMovement
  }

  async update(movement: Movement): Promise<Movement> {
    const updatedMovement = await AppDataSource.manager.save(movement)

    return updatedMovement
  }

  async delete(movement: Movement): Promise<void> {
    await AppDataSource.manager.delete(Movement, movement.id)
  }

  async findAllByUserId(userId: number): Promise<Movement[]> {
    const movements = await AppDataSource.manager.find(Movement, {
      where: {
        user: { id: userId },
      },
      relations: this.relations,
    })

    return movements
  }
}
