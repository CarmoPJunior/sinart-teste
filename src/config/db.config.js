// module.exports = {
//   HOST: "localhost",
//   PORT: "1434",
//   USER: "sa",
//   PASSWORD: "123456",
//   DB: "sisseg",
//   dialect: "mssql",
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// };

require("dotenv").config();

module.exports = {
  development: {
    username: "sa",
    password: "root",
    database: "sisseg",
    host: "127.0.0.1",
    dialect: "mssql"
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql"
  }
};
