import 'reflect-metadata'

import { AppDataSource } from './data-source'
import { User } from './user/User'
import { Account } from './account/Account'

AppDataSource.initialize()
  .then(async () => {
    const user = await AppDataSource.manager.findOne(User, {
      where: {
        id: 1,
      },
    })

    console.log(user)

    const account = await AppDataSource.manager.findOne(Account, {
      where: {
        id: 1,
      },
      relations: ['user'],
    })

    console.log(account?.user)
  })
  .catch((error) => console.log(error))
