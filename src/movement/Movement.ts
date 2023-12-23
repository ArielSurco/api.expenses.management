import { Account } from '../account/Account'
import { Category } from '../category/Category'
import { User } from '../user/User'

import { MovementType } from './MovementType'

export interface Constructor {
  account: Account
  detail: string
  user: User
  category: Category
  date: Date
  type: MovementType
  amount: number
}

export class Movement {
  account: Account
  detail: string
  user: User
  category: Category
  date: Date
  type: MovementType
  amount: number

  constructor({ account, detail, user, category, date, type, amount }: Constructor) {
    this.account = account
    this.detail = detail
    this.user = user
    this.category = category
    this.date = date
    this.type = type
    this.amount = amount
  }
}
