import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

import { Account } from '../account/Account'
import { Category } from '../category/Category'
import { User } from '../user/User'

import { MovementType } from './MovementType'

export interface Constructor {
  account?: Account | null
  detail?: string
  user?: User | null
  category?: Category | null
  date?: Date
  type?: MovementType
  amount?: number
}

@Entity()
export class Movement {
  @PrimaryGeneratedColumn()
  id?: number

  @ManyToOne(() => Account)
  account?: Account

  @Column()
  detail: string

  @ManyToOne(() => User)
  user?: User

  @ManyToOne(() => Category)
  category?: Category

  @Column()
  date: Date

  @Column({
    type: 'enum',
    enum: MovementType,
  })
  type?: MovementType

  @Column()
  amount: number

  constructor({ account, detail, user, category, date, type, amount }: Constructor = {}) {
    this.account = account ?? undefined
    this.detail = detail ?? ''
    this.user = user ?? undefined
    this.category = category ?? undefined
    this.date = date ?? new Date()
    this.type = type
    this.amount = amount ?? 0
  }
}
