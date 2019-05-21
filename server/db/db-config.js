/**
 * @config TypeORM config
 * This file should be JS not TS because otherwise CLI won't work.
 */

// @ts-check
const creds = require('../creds');

/**
 *
 * @type import('typeorm').ConnectionOptions
 */
module.exports = {
  type: 'mysql',

  ...creds.db, // it contains sensitive info so it'snot under version control

  synchronize: false,
  logging: false, // toggle for debug
  entities: [
    'server/db/entity/**/*.ts'
  ],
  migrations: [
    'server/db/migration/**/*.ts'
  ],
  migrationsTableName: 'orm_migrations',
  subscribers: [
    'server/db/subscriber/**/*.ts'
  ],

  cli: {
    migrationsDir: 'server/db/migration'
  },

};

