import { hotel } from "../models/Hoteles.js";
const guardarHoteles = async (req, res) => {
    const { nombre, direccion, telefono, correo } = req.body;
    const errores = [];
    if (nombre.trim() === "") {
        errores.push({ mensaje: "El nombre no debe ser vacio" });
    }
    if (direccion === undefined) {
        errores.push({ mensaje: "La direccion no debe ser vacio" });
    }
    if (telefono.trim() === "") {
        errores.push({ mensaje: "La telefono no debe ser vacio" });
    }
    if (correo.trim() === "") {
        errores.push({ mensaje: "La correo no debe ser vacio" });
    }
    if (errores.length > 0) {
        res.render("hoteles", {
            pagina: "Hoteles",
            errores,
            nombre,
            direccion,
            telefono,
            correo,
        });
    } else {
        //Almacenar en la base de datos
        try {
            await hotel.create({
                nombre,
                direccion,
                telefono,
                correo,
            });
            res.redirect('/hoteles');
        } catch (error) {
            console.log(error);
        }
    }
};



export { guardarHoteles};