import dotenv from 'dotenv';
dotenv.config();

const config = {

  nodeEnv: process.env.NODE_ENV || 'development',
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',

  aocSession: process.env.AOC_SESSION,

  port: process.env.PORT || 3000,

  validate() {
    if (!this.aocSession) {
      throw new Error(
        'Verify your session key set in the .env file. It is required to fetch the input data from Advent of Code.'
      )
    }
  }
}

try {
  config.validate()
} catch (error) {
  if (process.env.NODE_ENV !== 'test') {
    console.error('Configuration Error:', error.message)
    process.exit(1)
  }
}

export default config