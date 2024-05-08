import {comentario} from "../models/Comentarios.js";
const guardarComentarios = async (req, res) => {
    const { correo, imagen, opinion } = req.body;
    const errores = {};
    if (correo.trim() === "") {
        errores.push({ mensaje: "El correo no debe ser vacio" })
    }
    if (imagen.trim() === "") {
        errores.push({ mensaje: "La imagen no debe ser vacio" })
    }
    if (opinion.trim() === "") {
        errores.push({ mensaje: "La opinion no debe ser vacio" })
    }
    if (errores.lenght > 0) {
        res.render("comentarios", {
            pagina: "Comentarios",
            errores,
            correo,
            imagen,
            opinion,
        });
    } else {
        //Almacenar en la base de datos
        try {
            await comentario.create({
                correo,
                imagen,
                opinon
            });
            res.redirect('/comentarios');
        } catch (error) {
            console.log(error);
        }
    }
};
//---------------------------------------------------------------LISTA
const listaComentarios =async (req,res)=>{
    const comentarios=await comentario.findAll({
        attributes: ["id", "correo", "imagen", "opinion"]
    });
  res.render("listaComenterios",{
    pagina: "Comentarios",
    comentarios
  });
};
export { guardarComentarios,listaComentarios};