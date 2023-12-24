import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

export interface Constructor {
  name?: string
  lastName?: string
  email?: string
  phone?: string
  password?: string
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id?: number

  @Column()
  name: string

  @Column()
  lastName: string

  @Column({
    unique: true,
  })
  email: string

  @Column()
  phone: string

  @Column()
  password: string

  @Column()
  isActive: boolean

  constructor({ name, lastName, email, phone, password }: Constructor = {}) {
    this.name = name ?? ''
    this.lastName = lastName ?? ''
    this.email = email ?? ''
    this.phone = phone ?? ''
    this.password = password ?? ''
    this.isActive = true
  }
}
