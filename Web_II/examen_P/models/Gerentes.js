import { Sequelize } from "sequelize";
import db from "../config/db.js";

export const gerente = db.define('gerentes',{
    nombre:{type:Sequelize.STRING(40)},
    ap_paterno:{type:Sequelize.STRING(100)},
    ap_materno:{type:Sequelize.STRING(50)},
    telefono:{type:Sequelize.STRING(10)},
}, { timestamps: false });