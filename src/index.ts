import 'reflect-metadata'
import { UserRepository } from './user/UserRepository'
import { AppDataSource } from './data-source'
import { AccountRepository } from './account/AccountRepository'
import { CategoryRepository } from './category/CategoryRepository'
import { MovementRepository } from './movement/MovementRepository'

AppDataSource.initialize()
  .then(async () => {
    console.log('Database connected')

    const userRepository = new UserRepository()
    const accountRepository = new AccountRepository()
    const categoryRepository = new CategoryRepository()
    const movementRepository = new MovementRepository({ relations: ['account', 'category'] })

    const user = await userRepository.findById(1)

    console.log(user)

    if (!user || !user.id) return

    const userAccounts = await accountRepository.findAllByUserId(user.id)

    console.log(userAccounts)

    const categories = await categoryRepository.findAllByUserId(user.id)

    console.log(categories)

    const movements = await movementRepository.findAllByUserId(user.id)

    console.log(movements)
  })
  .catch((error) => console.log(error))
