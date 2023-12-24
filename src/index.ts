import 'reflect-metadata'

import { AppDataSource } from './data-source'
import { User } from './user/User'
import { Account } from './account/Account'
import { Category } from './category/Category'

AppDataSource.initialize()
  .then(async () => {
    const user = await AppDataSource.manager.findOne(User, {
      where: {
        id: 1,
      },
    })

    console.log(user)

    const accounts = await AppDataSource.manager.find(Account)

    console.log(accounts)

    const categories = await AppDataSource.manager.find(Category)

    console.log(categories)
  })
  .catch((error) => console.log(error))
