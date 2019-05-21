export interface Creds {
  db: {
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
  },
}

// The example of `creds.js` is below the line
// ---------------------------------------------
// // @ts-check
//
// /**
//  * @type import('./creds.interface').Creds
//  */
// module.exports = {
//   db: {
//     host: 'localhost',
//     port: 3306,
//     username: '...',
//     password: '...',
//     database: '...',
//   },
// };
