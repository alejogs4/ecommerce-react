/**
 * @description Setting up database options.
 */

module.exports = {
  user: process.env.DATABASE_USER || 'postgres',
  host: process.env.DATABASE_HOST || 'localhost',
  password: process.env.DATABASE_PASWORD || '',
  database: process.env.DATABASE_NAME || 'vantablack',
  port: 5432,
}