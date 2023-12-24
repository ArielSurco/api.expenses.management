import 'reflect-metadata'
import { UserRepository } from './user/UserRepository'
import { AppDataSource } from './data-source'
import { AccountRepository } from './account/AccountRepository'

// import { User } from './user/User'
// import { Account } from './account/Account'
// import { Category } from './category/Category'
// import { Movement } from './movement/Movement'

AppDataSource.initialize()
  .then(async () => {
    console.log('Database connected')

    const userRepository = new UserRepository()
    const accountRepository = new AccountRepository()

    const user = await userRepository.findById(1)

    console.log(user)

    if (!user || !user.id) return

    const userAccounts = await accountRepository.findAllByUserId(user.id)

    console.log(userAccounts)

    // const categories = await AppDataSource.manager.find(Category)

    // console.log(categories)

    // const movements = await AppDataSource.manager.find(Movement, {
    //   relations: ['account', 'category', 'user'],
    // })

    // console.log(movements)
  })
  .catch((error) => console.log(error))
