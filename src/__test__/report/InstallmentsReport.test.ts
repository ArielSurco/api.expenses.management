import { AccountType } from '../../account/AccountType'
import { MovementType } from '../../movement/MovementType'
import { InstallmentsReport } from '../../report/InstallmentsReport'
import { AccountFactory } from '../factories/AccountFactory'
import { MovementFactory } from '../factories/MovementFactory'
import { UserFactory } from '../factories/UserFactory'

describe('InstallmentsReport', () => {
  it('total should be 0 when there are no movements', () => {
    const report = new InstallmentsReport().generateReport([])

    expect(report.total).toBe(0)
  })

  it('total should be 0 when there are movements but the account does not be type CREDIT ', () => {
    const user = UserFactory.create()
    const account = AccountFactory.create({ type: AccountType.DEBIT })
    const movement = MovementFactory.create({ account, user })

    const report = new InstallmentsReport().generateReport([movement])

    expect(report.total).toBe(0)
  })

  it('total should be the sum of all movements in the given year', () => {
    const user = UserFactory.create()
    const account = AccountFactory.create({ user, type: AccountType.CREDIT })

    const movement1 = MovementFactory.create({
      type: MovementType.EXPENSE,
      account: account,
      user: user,
      amount: 47,
      date: new Date(2021, 0, 1),
    })

    const movement2 = MovementFactory.create({
      type: MovementType.EXPENSE,
      account: account,
      user: user,
      amount: 16,
      date: new Date(2021, 1, 1),
    })

    const movement3 = MovementFactory.create({
      type: MovementType.EXPENSE,
      account: account,
      user: user,
      amount: 10,
      date: new Date(2022, 2, 1),
    })

    const report2021 = new InstallmentsReport().generateReport(
      [movement1, movement2, movement3],
      2021,
    )
    const report2022 = new InstallmentsReport().generateReport(
      [movement1, movement2, movement3],
      2022,
    )

    expect(report2021.total).toBe(63)
    expect(report2022.total).toBe(10)
  })

  it('total should be 0 when there are movements, but not in the given year', () => {
    const user = UserFactory.create()
    const account = AccountFactory.create({ user, type: AccountType.CREDIT })

    const movement1 = MovementFactory.create({
      type: MovementType.EXPENSE,
      account: account,
      user: user,
      amount: 50,
      date: new Date(2020, 0, 1),
    })

    const movement2 = MovementFactory.create({
      type: MovementType.EXPENSE,
      account: account,
      user: user,
      amount: 50,
      date: new Date(2020, 1, 1),
    })

    const report = new InstallmentsReport().generateReport([movement1, movement2], 2021)

    expect(report.total).toBe(0)
  })

  it('can handle a simple movement with refund', () => {
    const user = UserFactory.create()
    const account = AccountFactory.create({ user, type: AccountType.CREDIT })

    const expense = MovementFactory.create({
      type: MovementType.EXPENSE,
      account: account,
      user: user,
      amount: 50,
      date: new Date(2021, 0, 1),
    })

    const refund = MovementFactory.create({
      type: MovementType.INCOME,
      account: account,
      user: user,
      amount: 50,
      date: new Date(2021, 1, 1),
    })

    const report = new InstallmentsReport().generateReport([expense, refund], 2021)

    expect(report.total).toBe(0)
  })
})
