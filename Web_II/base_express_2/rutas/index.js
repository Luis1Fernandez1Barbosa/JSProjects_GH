import express from "express";
import {paginaComentarios, paginaCreadores, paginaInicio, paginaMaterias} from "../controller/paginasController.js";
import { guardarComentarios} from "../controller/comentariosController.js";

const rutas = express.Router();
rutas.get("/",paginaInicio);
rutas.get("/creadores",paginaCreadores);
rutas.get("/materias",paginaMaterias);

rutas.get("/comentarios",paginaComentarios);
rutas.get("/comentarios",guardarComentarios);

export default rutas;
