import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

import { User } from '../user/User'

export interface Constructor {
  name?: string
  icon?: string
  user?: User | null
}

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id?: number

  @Column()
  name: string

  @Column()
  icon: string

  @ManyToOne(() => User, { nullable: true })
  user?: User

  constructor({ name, icon, user }: Constructor = {}) {
    this.name = name ?? ''
    this.icon = icon ?? ''
    this.user = user ?? undefined
  }
}
