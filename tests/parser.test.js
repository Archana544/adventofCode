import { inputParser } from '../src/inputParser.js';
describe('Parser', () => {
  test('should parse single report', () => {
    const input = '6 8 11 12 14 16 18 16'
    const result = inputParser(input)
    expect(result).toHaveLength(1)
    expect(result[0]).toEqual([6, 8, 11, 12, 14, 16, 18, 16])
  })

  test('should parse multiple reports', () => {
    const input = `6 8 11 12 14 16 18 16
    5 7 10 11 13 15 17 15`
    const result = inputParser(input)
    expect(result).toHaveLength(2)
  })

  test('should throw on invalid input', () => {
    expect(() => inputParser(null)).toThrow()
    expect(() => inputParser('invalid data')).toThrow()
  })
})
