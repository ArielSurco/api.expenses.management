import { Account, Constructor } from '../../account/Account'
import { AccountType } from '../../account/AccountType'

import { UserFactory } from './UserFactory'

export class AccountFactory {
  public static create(account: Partial<Constructor> = {}): Account {
    return new Account({
      name: account.name ?? 'Name test',
      type: account.type ?? AccountType.DEBIT,
      user: account.user ?? UserFactory.create(),
      balance: account.balance ?? 100,
    })
  }
}
