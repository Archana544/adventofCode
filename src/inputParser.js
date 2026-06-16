export function inputParser(input) {

    /**
   * This function runs in O(n × m) time where n is the number of lines and m is the number of values per line,
   * because we process each line and each number within it once. The space complexity is also O(n × m)
   * since we store the fully parsed nested array structure in memory. I used `map()` because it cleanly transforms
   * raw string data into numbers in a readable and functional way, without manual looping. I used `filter()` to
   * remove empty lines and extra spaces so we don’t end up with invalid or NaN values during parsing. I also added edge
   * case handling to ensure that the input is a non-empty string and that all parsed values are valid numbers, 
   * which helps prevent runtime errors later on when we process the data.
   */ 

    if (!input || typeof input !== 'string') {
    throw new Error('Input must be a non-empty string')
    }
  return input
    .trim()
    .split('\n')
    .filter(line => line.length > 0)
    .map((line, index) => {
        const levels = line
          .split(' ')
          .filter(num => num.length > 0)
          .map(num => {
            const parsed = Number(num)
            if (isNaN(parsed)) {
              throw new Error(`Invalid number at line ${index + 1}: "${num}"`)
            }
            return parsed
          })

        if (levels.length === 0) {
          throw new Error(`Empty report at line ${index + 1}`)
        }

        return levels
      })
}



