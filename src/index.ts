import 'reflect-metadata'

import { AppDataSource } from './data-source'
import { User } from './user/User'
import { Account } from './account/Account'
import { Category } from './category/Category'
import { Movement } from './movement/Movement'

AppDataSource.initialize()
  .then(async () => {
    const users = await AppDataSource.manager.find(User)

    console.log(users)

    const accounts = await AppDataSource.manager.find(Account)

    console.log(accounts)

    const categories = await AppDataSource.manager.find(Category)

    console.log(categories)

    const movements = await AppDataSource.manager.find(Movement, {
      relations: ['account', 'category', 'user'],
    })

    console.log(movements)
  })
  .catch((error) => console.log(error))
