import { hotel } from "../models/Hoteles.js";
import { gerente } from "../models/Gerentes.js";
import { habitacion } from "../models/Habitaciones.js";

const paginaInicio = (req,res) => {
    res.render("inicio",{
        pagina:"Inicio",
    });
};

const paginaHoteles = async (req,res)=>{
    //Obtener registros
  const hoteles = await hotel.findAll({
    attributes: [ "nombre", "direccion","telefono","correo"],
  });
    res.render("hoteles",{
        pagina:"Hoteles",
        hoteles: hoteles,
    });
};

const paginaGerentes = async (req,res)=>{
    //Obtener registros
    const gerentes =await gerente.findAll({
        attributes:["nombre", "ap_paterno", "ap_materno", "telefono"],
    });
    res.render("gerentes",{
        pagina:"Gerentes",
        gerentes:gerentes,
    });
};

const paginaHabitaciones = async (req,res)=>{
    //Obtener registros
    const habitaciones =await habitacion.findAll({
        attributes:["nombre", "piso", "refrigerador"],
    });
    res.render("habitaciones",{
        pagina:"Habitaciones",
        habitaciones:habitaciones,
    });
};

export {
    paginaInicio,
    paginaHoteles,
    paginaGerentes,
    paginaHabitaciones
};
