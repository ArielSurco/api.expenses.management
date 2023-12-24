import { AccountType } from '../account/AccountType'
import { Movement } from '../movement/Movement'
import { Month } from '../shared/Month'

import { Report } from './Report'
import { ReportGenerator } from './ReportGenerator'
import { ReportItem } from './ReportItem'

export class InstallmentsReport implements ReportGenerator {
  private groupMovementsByMonth(movements: Movement[]): Map<number, Movement[]> {
    const movementsByMonth = new Map<Month, Movement[]>()

    movements.forEach((movement) => {
      const month = movement.date.getMonth()

      const currentMovements = movementsByMonth.get(month) ?? []

      movementsByMonth.set(month, [...currentMovements, movement])
    })

    return movementsByMonth
  }

  private groupMovementsByCategory(movements: Movement[]): Map<string, Movement[]> {
    const movementsByCategory = new Map<string, Movement[]>()

    movements.forEach((movement) => {
      if (!movement.category) return

      const currentMovements = movementsByCategory.get(movement.category.name) ?? []

      movementsByCategory.set(movement.category.name, [...currentMovements, movement])
    })

    return movementsByCategory
  }

  generateReport(movements: Movement[], year?: number): Report {
    const report = new Report()
    const installmentsMovements = movements.filter(
      (movement) =>
        movement.account?.type === AccountType.CREDIT && movement.date.getFullYear() === year,
    )

    const movementsByMonth = this.groupMovementsByMonth(installmentsMovements)

    movementsByMonth.forEach((monthMovements, month) => {
      const movementsByCategory = this.groupMovementsByCategory(monthMovements)

      const reportItem = new ReportItem()

      movementsByCategory.forEach((categoryMovements, category) => {
        categoryMovements.forEach((categoryMovement) => {
          reportItem.addMovement(category, categoryMovement)
        })
      })

      report.addItem(month, reportItem)
    })

    return report
  }
}
