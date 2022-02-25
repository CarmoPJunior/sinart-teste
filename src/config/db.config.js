require("dotenv").config();

module.exports = {
  development: {
    type: "mssql",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: false,
    logging: false,
    options: {
      encrypt: false,
      useUTC: true
    },
    entities: [
      "src/entity/**/*.ts"
    ]
  },
  test: {
    type: "mssql",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: false,
    logging: false,
    options: {
      encrypt: false,
      useUTC: true
    },
    entities: [
      "src/entity/**/*.ts"
    ]
  },
  production: {
    type: "mssql",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: false,
    logging: false,
    options: {
      encrypt: false,
      useUTC: true
    },
    entities: [
      "src/entity/**/*.ts"
    ]
  }
};
