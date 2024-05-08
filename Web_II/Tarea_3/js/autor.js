let stampit = require('stampit');
let Autor = function () {
    let objetoAutor = stampit();
    let Clase = function () {
        let nombreCompleto = '';
        let fechaNacimiento = '';
        let nacionalidad = '';
        function devuelveVerdadero() {
            return true;
        }
        function comprobarFechaNacimiento() {
            let NPARTESCORRECTA = 3;
            let partesFecha = fechaNacimiento.split("/");
            let nPartes = partesFecha.length;
            if (nPartes !== NPARTESCORRECTA) {
                return false;
            }
            let i;
            let valido = true;
            for (i = 0; i < nPartes; i++) {
                let estaParte = partesFecha[i];
                if (!/^([0-9])*$/.test(estaParte)) {
                    valido = false;
                    break;
                }
            }
            if (!valido) {
                return false;
            }
            let dias = partesFecha[0];
            let meses = partesFecha[1];
            let anos = partesFecha[2];
            if ((dias.length === 2) && (meses.length === 2) && (anos.length === 4)) {
                return true;
            } else {
                return false;
            }
        }
        function checkCampo(nombreCampo) {
            if ((nombreCampo) && (nombreCampo !== '')) {
                if (nombreCampo === 'fechaNacimiento') {
                    return comprobarFechaNacimiento;
                } else {
                    return devuelveVerdadero;
                }
            } else {
                return devuelveVerdadero;
            }
        }
        this.getNombreCompleto = function () {
            return nombreCompleto;
        };
        this.setNombreCompleto = function (nombreCompletoAutor) {
            nombreCompleto = nombreCompletoAutor;
        };
        this.getFechaNacimiento = function () {
            return fechaNacimiento;
        };
        this.setFechaNacimiento = function (fechaNacimientoAutor) {
            fechaNacimiento = fechaNacimientoAutor;
        };
        this.getNacionalidad = function () {
            return nacionalidad;
        };
        this.setNacionalidad = function (nacionalidadAutor) {
            nacionalidad = nacionalidadAutor;
        };
        this.checkCampo = checkCampo;
    };
    objetoAutor.enclose(Clase);
    return objetoAutor.create();
};
module.exports = Autor;