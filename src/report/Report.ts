import { Month } from '../shared/Month'

import { ReportItem } from './ReportItem'

export class Report {
  report: Map<Month, ReportItem[]>
  total: number

  constructor() {
    this.report = new Map()
    this.total = 0
  }

  addItem(month: Month, item: ReportItem): void {
    const items = this.report.get(month) ?? []

    items.push(item)

    this.report.set(month, items)

    this.total += item.total
  }

  getTotalByMonth(month: Month): number {
    const items = this.report.get(month) ?? []

    return items.reduce((acc, item) => acc + item.total, 0)
  }
}
