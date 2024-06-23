import { Sequelize } from "sequelize";
import db from "../config/db.js";

export const hotel = db.define('hoteles',{
    nombre:{type:Sequelize.STRING(40)},
    direccion:{type:Sequelize.STRING(100)},
    telefono:{type:Sequelize.STRING(10)},
    correo:{type:Sequelize.STRING(50)},
    gerentes:{type:Sequelize.JSON},
    habitaciones:{type:Sequelize.JSON}
}, { timestamps: false });