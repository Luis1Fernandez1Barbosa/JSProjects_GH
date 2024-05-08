// Implementación de la clase Habitacion con getters y setters.
let Habitacion = function () {
    let sThis = this;
    this.datosHabitacion = {
        numeroCamas: '',
        planta: '',
        telefono: ''
    };

    let getNumeroCamas = function () {
        return sThis.datosHabitacion.numeroCamas;
    },
        setNumeroCamas = function (numeroCamas) {
            sThis.datosHabitacion.numeroCamas=numeroCamas;
        },
        getPlanta = function () {
            return sThis.datosHabitacion.planta;
        },
        setPlanta = function (planta) {
            sThis.datosHabitacion.planta = planta;
        },
        getTelefono = function () {
            return sThis.datosHabitacion.telefono;
        },
        setTelefono = function (telefono) {
            sThis.datosHabitacion.telefono = telefono;
        };
    return {
        getNumeroCamas: getNumeroCamas,
        setNumeroCamas: setNumeroCamas,
        getPlanta: getPlanta,
        setPlanta :  setPlanta ,
        getTelefono : getTelefono ,
        setTelefono: setTelefono,
        
    }
};