module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: 'provide-your-mysql-password',
    DB: 'provide-the-name-of-the-database',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  };
  