module.exports = {
  user: process.env.DATABASE_USER || 'postgres',
  host: process.env.DATABASE_HOST || 'localhost',
  password: process.env.DATABASE_URL || '',
  database: process.env.DATABASE_NAME || 'vantablack',
  port: 3211,
}