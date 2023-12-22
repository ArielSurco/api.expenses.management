import { User } from '../user/User'

interface Constructor {
  name: string
  icon: string
  user?: User
}

export class Category {
  name: string
  icon: string
  user: User | null

  constructor({ name, icon, user }: Constructor) {
    this.name = name
    this.icon = icon
    this.user = user ?? null
  }
}
