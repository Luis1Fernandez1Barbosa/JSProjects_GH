let stampit=require('stampit');
let Libro = function () {
let objetoLibro = stampit();
let Clase = function () {
        let titulo = '';
        let editorial = '';
        let autor = {};
        let fechaPrimeraEdicion = '';
        let isbn = '';
        function devuelveVerdadero() {
            return true;
        }
        function compruebaIsbn() {
            let partesIsbn = isbn.split('-');
            let nPartes = partesIsbn.length;
            if (nPartes !== 5) {
                return false;
            } else {
                let valido = true;
                for (var i = 0; i < nPartes; i++) {
                    let estaParte = partesIsbn[i];
                    // Usamos expresión regular.
                    if (!/^([0-9])*$/.test(estaParte)) {
                        valido = false;
                        break;
                    }
                }
                return valido;
            }
        }
        function checkCampo(nombreCampo) {
            if ((nombreCampo) && (nombreCampo !== '')) {
                if (nombreCampo === 'isbn') {
                    return compruebaIsbn;
                } else {
                    return devuelveVerdadero;
                }
            } else {
                return devuelveVerdadero;
            }
        }
        this.getTitulo = function () {
            return titulo;
        };
        this.setTitulo = function (tituloLibro) {
            titulo = tituloLibro;
        };
        this.getEditorial = function () {
            return editorial;
        };
        this.setEditorial = function (editorialLibro) {
            editorial = editorialLibro;
        };
        this.getAutor = function () {
            return autor;
        };
        this.setAutor = function (autorLibro) {
            autor = autorLibro;
        };
        this.getFechaPrimeraEdicion = function () {
            return fechaPrimeraEdicion;
        };
        this.setFechaPrimeraEdicion = function (fechaPrimeraEdicionLibro) {
            fechaPrimeraEdicion = fechaPrimeraEdicionLibro;
        };
        this.getIsbn = function () {
            return isbn;
        };
        this.setIsbn = function (isbnLibro) {
            isbn = isbnLibro;
        };
        this.checkCampo = checkCampo;
    };
    objetoLibro.enclose(Clase);
    return objetoLibro.create();
};
module.exports = Libro;