import { Movement } from '../movement/Movement'

import { Report } from './Report'

export interface ReportGenerator {
  generateReport(movements: Movement[]): Report
}
