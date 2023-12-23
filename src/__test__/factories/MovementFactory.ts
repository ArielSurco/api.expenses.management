import { Constructor, Movement } from '../../movement/Movement'
import { MovementType } from '../../movement/MovementType'

import { AccountFactory } from './AccountFactory'
import { CategoryFactory } from './CategoryFactory'
import { UserFactory } from './UserFactory'

export class MovementFactory {
  public static create(movement: Partial<Constructor> = {}): Movement {
    const user = movement.user ?? UserFactory.create()

    return new Movement({
      account: movement.account ?? AccountFactory.create({ user }),
      detail: movement.detail ?? 'Detail test',
      user: user,
      category: movement.category ?? CategoryFactory.create({ user }),
      date: movement.date ?? new Date(),
      type: movement.type ?? MovementType.INCOME,
      amount: movement.amount ?? 100,
    })
  }
}
