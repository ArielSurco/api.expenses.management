import 'reflect-metadata'
import { UserRepository } from './user/UserRepository'
import { AppDataSource } from './data-source'

// import { User } from './user/User'
// import { Account } from './account/Account'
// import { Category } from './category/Category'
// import { Movement } from './movement/Movement'

AppDataSource.initialize()
  .then(async () => {
    console.log('Database connected')

    const userRepository = new UserRepository()

    const user = await userRepository.findById(1)

    console.log(user)

    // const accounts = await AppDataSource.manager.find(Account)

    // console.log(accounts)

    // const categories = await AppDataSource.manager.find(Category)

    // console.log(categories)

    // const movements = await AppDataSource.manager.find(Movement, {
    //   relations: ['account', 'category', 'user'],
    // })

    // console.log(movements)
  })
  .catch((error) => console.log(error))
