// Implementación de la clase Gerente con getters y setters.
let Gerente = function () {
    let sThis = this;
    this.datosGerente = {
        nombreCompleto: '',
        numeroDocumento: '',
        telefono: ''
    };
    let getNombreCompleto = function () {
        return sThis.datosGerente.nombreCompleto;
    },
        setNombreCompleto = function (nombreCompleto) {
            sThis.datosGerente.nombreCompleto = nombreCompleto;
        },
        getnumeroDocumento = function () {
            return sThis.datosGerente.numeroDocumento;
        },
        setnumeroDocumento = function (numeroDocumento) {
            sThis.datosGerente.numeroDocumento = numeroDocumento;
        },
        getTelefono = function () {
            return sThis.datosGerente.telefono;
        },
        setTelefono = function (telefono) {
            sThis.datosGerente.telefono = telefono;
        };
    return {
        getNombreCompleto: getNombreCompleto,
        setNombreCompleto: setNombreCompleto,
        getnumeroDocumento: getnumeroDocumento,
        setnumeroDocumento: setnumeroDocumento,
        getTelefono: getTelefono,
        setTelefono: setTelefono
    }
};