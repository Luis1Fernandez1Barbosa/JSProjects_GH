import { Sequelize } from "sequelize";
const db = new Sequelize("informacion", "root", "LAFB2000", {
  dialect: "mysql",
  dialectOptions: {
    host: "127.0.0.1",
    port: "3308",
    timestamps: false,
    underscore: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    operatorAlies: false,
  },
});

export default db;
