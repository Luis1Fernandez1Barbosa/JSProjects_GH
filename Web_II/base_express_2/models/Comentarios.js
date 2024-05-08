import Sequelize from "sequelize";
import db from '../config/db.js';

export const comentario = db.define('comentarios',{
    correo: {
        type: Sequelize.STRING
    },
    imagen: {
        type: Sequelize.INTEGER
    },
    opinion: {
        type: Sequelize.STRING
    }
}, { timestamps: false });