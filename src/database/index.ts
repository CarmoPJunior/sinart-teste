import { createConnection } from "typeorm";

createConnection({
  type: "mssql",
  host: "localhost",
  port: 1433,
  username: "sa",
  password: "root",
  database: "sisseg",
  synchronize: false,
  logging: false,
  options: {
    encrypt: false,
    useUTC: true
  },
  entities: [
    "src/entity/**/*.ts"
  ]
}).then(connection => {
  console.log("Conexão ok");
}).catch(error => console.log(error));
