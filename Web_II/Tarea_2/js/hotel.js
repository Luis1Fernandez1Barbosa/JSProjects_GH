let Hotel = function () {
    let sThis = this;
    this.datosHotel = {
        nombre: '',
        ciudad: '',
        direccion: '',
        telefono: '',
        sitioWeb: '',
        gerente: '',
        habitacion: ''
    };
    let getNombre = function () {
        return sThis.datosHotel.nombre;
    },
        setNombre = function (nombre) {
            sThis.datosHotel.nombre = nombre;
        },
        getCiudad = function () {
            return sThis.datosHotel.ciudad;
        },
        setCiudad = function (ciudad) {
            sThis.datosHotel.ciudad = ciudad;
        },
        getDireccion = function () {
            return sThis.datosHotel.direccion;
        },
        setDireccion = function (direccion) {
            sThis.datosHotel.direccion = direccion;
        },
        getTelefono = function () {
            return sThis.datosHotel.telefono;
        },
        setTelefono = function (telefono) {
            sThis.datosHotel.telefono = telefono;
        },
        getHabitacion = function () {
            return sThis.datosHotel.habitacion;
        },
        setHabitacion = function (habitacion) {
            sThis.datosHotel.habitacion = habitacion;
        };
    return {
        getNombre: getNombre,
        setNombre: setNombre,
        getCiudad: getCiudad,
        setCiudad: setCiudad,
        getDireccion: getDireccion,
        setDireccion: setDireccion,
        getTelefono: getTelefono,
        setTelefono: setTelefono,
        getHabitacion: getHabitacion,
        setHabitacion: setHabitacion
    }
}

