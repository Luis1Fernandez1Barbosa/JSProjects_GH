import { Sequelize } from "sequelize";
import db from "../config/db.js";

export const habitacion = db.define('habitaciones', {
    piso: { type: Sequelize.STRING(10) },
    nombre: { type: Sequelize.STRING(30) },
    refrigerador: { type: Sequelize.STRING(10) },
}, { timestamps: false });