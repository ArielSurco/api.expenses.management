import { User } from '../user/User'

import { AccountType } from './AccountType'

export interface Constructor {
  name: string
  type: AccountType
  user: User
  balance?: number
}

export class Account {
  name: string
  type: AccountType
  user: User
  balance: number

  constructor({ name, type, user, balance }: Constructor) {
    this.name = name
    this.type = type
    this.user = user
    this.balance = balance ?? 0
  }
}
