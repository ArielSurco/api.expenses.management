import 'reflect-metadata'
import { DataSource } from 'typeorm'

import { User } from './user/User'
import { Account } from './account/Account'
import { Category } from './category/Category'
import { Movement } from './movement/Movement'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'root',
  database: 'finance-app-test',
  synchronize: true,
  logging: false,
  entities: [User, Account, Category, Movement],
  migrations: [],
  subscribers: [],
})
