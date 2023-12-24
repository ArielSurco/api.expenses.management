import { AppDataSource } from '../data-source'

import { Account } from './Account'

interface Constructor {
  relations?: 'user'[]
}

export class AccountRepository {
  relations: Constructor['relations']

  constructor({ relations }: Constructor = {}) {
    this.relations = relations
  }

  async create(account: Account): Promise<Account> {
    const savedAccount = AppDataSource.manager.save(account)

    return savedAccount
  }

  async update(account: Account): Promise<Account> {
    const updatedAccount = AppDataSource.manager.save(account)

    return updatedAccount
  }

  async delete(account: Account): Promise<void> {
    await AppDataSource.manager.delete(Account, account.id)
  }

  async findAllByUserId(userId: number): Promise<Account[]> {
    const accounts = await AppDataSource.manager.find(Account, {
      where: {
        user: { id: userId },
      },
      relations: this.relations,
    })

    return accounts
  }
}
