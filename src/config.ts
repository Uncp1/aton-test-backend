export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,

  database: {
    type: process.env.DATABASE_TYPE || 'mongodb',
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT, 10) || 27017,
    database: process.env.DATABASE_NAME || 'atondb',
    entities: [__dirname + '/../**/*.entity.js'],
    synchronize: true,
  },

  secretKey: process.env.JWT_SECRET || 'secretKey',
  saltRound: parseInt(process.env.SALT_ROUND, 10) || 10,
});
