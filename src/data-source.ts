import 'reflect-metadata'
import { DataSource } from 'typeorm'

import { User } from './user/User'
import { Account } from './account/Account'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'root',
  database: 'finance-app-test',
  synchronize: true,
  logging: false,
  entities: [User, Account],
  migrations: [],
  subscribers: [],
})
