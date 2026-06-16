import { get } from 'https';

export function getInputData(sessionCookie) {
  return new Promise((resolve, reject) => {
    if (!sessionCookie) {
      return reject(new Error('Session cookie required.'));
    }

    const url = 'https://adventofcode.com/2024/day/2/input';

    const options = {
      headers: {
        Cookie: `session=${sessionCookie}`
      }
    };

    console.log('Fetching data from Advent of Code');

    get(url, options, (res) => {
      let data = '';

      if (res.statusCode !== 200) {
        return reject(
          new Error(`Request failed with status ${res.statusCode}`)
        );
      }

      res.on('data', (d) => {
        data += d;
      });

      res.on('end', () => {
        console.log('Input fetched successfully');
        resolve(data);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

