import { Constructor, User } from '../../user/User'

export class UserFactory {
  public static create(user: Partial<Constructor> = {}): User {
    return new User({
      name: user.name ?? 'Name test',
      lastName: user.lastName ?? 'Last name test',
      email: user.email ?? 'example@gmail.com',
      phone: user.phone ?? '999999999',
      password: user.password ?? '123456',
    })
  }
}
