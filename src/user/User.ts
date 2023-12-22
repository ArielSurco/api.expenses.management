interface Constructor {
  name: string
  lastName: string
  email?: string
  phone?: string
  password: string
}

export class User implements Constructor {
  name: string
  lastName: string
  email: string
  phone: string
  password: string
  isActive: boolean

  constructor({ name, lastName, email, phone, password }: Constructor) {
    this.name = name
    this.lastName = lastName
    this.email = email ?? ''
    this.phone = phone ?? ''
    this.password = password
    this.isActive = false
  }
}
