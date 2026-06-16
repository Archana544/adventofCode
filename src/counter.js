export function countSafeReports(inputs) {
     /**
   * TIME COMPLEXITY:
   * O(n × m) where n is the number of reports and m is the number of levels per report,
   * because we iterate through each report and then each adjacent pair once.
   * I also added early exits to break out of loops as soon as we determine a report is unsafe,
   *  which can improve performance on larger datasets and edge cases.  
   * */
    if (!Array.isArray(inputs)) {
    throw new Error('inputs must be an array')
  }
    let safeCount = 0;
    for(const input of inputs) {
        let direction = null;
        let isSafe = true;

        for(let i=0; i<input.length - 1; i++) {
            const current = input[i];
            const next = input[i + 1];
            const diff = next - current;

            if (diff === 0) {
                isSafe = false;
                break;
            }

            if (direction === null) {
                direction = diff > 0 ? 'increasing' : 'decreasing';
            } else if ((direction === 'increasing' && diff < 0) || (direction === 'decreasing' && diff > 0)) {
                isSafe = false;
                break;
            }

            if (Math.abs(diff) < 1 || Math.abs(diff) > 3) {
                isSafe = false;
                break;
            }
        }

        if (isSafe) {
            safeCount++;
        }
    }
    return safeCount;
}

