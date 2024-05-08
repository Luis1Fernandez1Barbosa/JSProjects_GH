import { comentario } from "../models/comentarios.js";
const guardarComentarios = async (req, res) => {
    const {correo, imagen, opinion } = req.body;
    const errores = [];
    if(correo.trim() === ""){
        errores.push({mensaje: "El correo no debe ser vacio"});
    }
    if(imagen === undefined){
        errores.push({mensaje: "La imagen no debe ser vacio"});
    }
    if(opinion.trim() === ""){
        errores.push({mensaje: "La opinion no debe ser vacio"});
    }
    if(errores.length > 0){
        res.render("comentarios", {
            pagina: "comentarios",
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
                opinion
            });
            res.redirect('/comentarios');
        } catch(error) {
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
//-----------------------------------------------------------------EJEMPLO, MODIFICAR
const cambiarComentarios =async (req,res)=>{
    console.log ('Listo'+req.query.id)
    try{
        const com=await comentario.findByPk(req.query.id)
        console.log(com);
        res.redirect("/cpmentarios");
     } catch(error) {
            console.log(error);
        }
    };
//-----------------------------------------------------------------
export { guardarComentarios,listaComentarios,cambiarComentarios};