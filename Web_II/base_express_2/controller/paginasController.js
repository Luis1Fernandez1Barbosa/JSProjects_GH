import {Materias} from "../models/Materias.js";
import {comentario} from "../models/Comentarios.js";
const paginaInicio=(req, res) => {
    res.render ("inicio", {
        pagina:"Inicio",
    });
}

const paginaCreadores=(req, res) => {
    res.render ("creadores", {
        pagina:"Creadores",
    });
}

const paginaMaterias=async (req, res) => {
    //obtener registros
    const materias=await Materias.findAll({
        attributes: ['nombre', 'creditos', ' imagen', 'descripcion']
    });
    res.render ("materias", {
        pagina:"Materias",
        materias: materias
    });
}

const paginaComentarios=(req, res) => {
    res.render ("comentarios", {
        pagina:"Comentarios",
    });
}

const paginaLista = async (req, res) => {
    //Obtener registros
    const comentarios = await comentario.findAll({
      attributes: ["correo", "imagen", "opinion"],
    });
  
    res.render("lista", {
      pagina: "Listado de comentarios",
      comentarios: comentarios,
    });
  };

export {
    paginaInicio,
    paginaCreadores,
    paginaMaterias,
    paginaComentarios,
    paginaLista
};