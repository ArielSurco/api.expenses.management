import { Movement } from '../movement/Movement'
import { MovementType } from '../movement/MovementType'

export class ReportItem {
  movementsByCategory: Map<string, number>
  total: number

  constructor() {
    this.movementsByCategory = new Map()
    this.total = 0
  }

  addMovement(category: string, movement: Movement): void {
    const currentAmount = this.movementsByCategory.get(category) ?? 0
    const movementAmount = movement.amount

    this.movementsByCategory.set(category, currentAmount + movementAmount)

    if (movement.type === MovementType.EXPENSE || movement.type === MovementType.TRANSFER) {
      this.total += movementAmount
    }

    if (movement.type === MovementType.INCOME) {
      this.total -= movementAmount
    }
  }
}
