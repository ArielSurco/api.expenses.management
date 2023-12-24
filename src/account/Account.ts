import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

import { User } from '../user/User'

import { AccountType } from './AccountType'

export interface Constructor {
  name?: string
  type?: AccountType
  user?: User | null
  balance?: number
}

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id?: number

  @Column()
  name: string

  @Column({
    type: 'enum',
    enum: AccountType,
  })
  type?: AccountType

  @ManyToOne(() => User)
  user?: User

  @Column()
  balance: number

  constructor({ name, type, user, balance }: Constructor = {}) {
    this.name = name ?? ''
    this.type = type
    this.user = user ?? undefined
    this.balance = balance ?? 0
  }
}
