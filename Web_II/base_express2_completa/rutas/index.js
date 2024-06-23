import express from "express";
import {
  paginaComentarios,
  paginaCreadores,
  paginaInicio,
  paginaMaterias,
  paginaLista,
} from "../controller/paginasControlador.js";
import { guardarComentarios, listaComentarios } from "../controller/comentariosController.js";

const rutas = express.Router();
rutas.get("/", paginaInicio);

rutas.get("/creadores", paginaCreadores);

rutas.get("/materias", paginaMaterias);

rutas.get("/comentarios", paginaComentarios);
rutas.post("/comentarios", guardarComentarios);

rutas.get("/lista", paginaLista);

rutas.get("/listaComentarios", listaComentarios);
//rutas.get("/modificarComentarios",modificarComentarios);

export default rutas;
