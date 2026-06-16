import dotenv from 'dotenv';
dotenv.config();

import { getInputData } from './src/dataFetcher.js';
import { inputParser } from './src/inputParser.js';
import { countSafeReports } from './src/counter.js';

async function main() {
  try {
    const rawData = await getInputData(process.env.AOC_SESSION);
    const parsedData = inputParser(rawData);
    const safeReportCount = countSafeReports(parsedData);
    console.log(`Number of safe reports: ${safeReportCount}`);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();