import express from 'express';
import { paginaInicio, paginaHoteles, paginaGerentes, paginaHabitaciones } from '../controller/paginaController.js';
import { guardarHoteles } from '../controller/datosController.js';

const inicio = express.Router();

inicio.get("/", paginaInicio);

inicio.get("/hoteles",paginaHoteles);
inicio.get("/hoteles",guardarHoteles);

inicio.get("/gerentes",paginaGerentes);
inicio.get("/habitaciones",paginaHabitaciones);
export default inicio;