// tests/counter.test.js

import { countSafeReports } from '../src/counter'

describe('Counter', () => {
  test('should count example correctly', () => {
    const reports = [
      [6, 8, 11, 12, 14, 16, 18, 16],
      [73, 76, 79, 80, 81, 84, 86, 86],
      [32, 33, 34, 37, 40, 44],
      [9, 11, 13, 14, 17, 24],
      [59, 61, 64, 62, 65],
      [33, 36, 37, 39, 36, 35]  
    ]
    expect(countSafeReports(reports)).toBe(0)
  })

  test('should return 0 for empty', () => {
    expect(countSafeReports([])).toBe(0)
  })
})
