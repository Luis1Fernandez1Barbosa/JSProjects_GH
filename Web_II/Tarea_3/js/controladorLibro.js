var stdio = require('stdio');
var Libro = require('../js/libro.js');
var controladorLibro = function(callback, parametroCallback,
autorLibro) {
var titulo = '';
var editorial = '';
var autor = autorLibro;
var fechaPrimeraEdicion = '';
var isbn = '';
stdio.question('Introduce el titulo del libro', function(err,
tituloLibro) {
if (err) return callback(parametroCallback, autor);
titulo = tituloLibro;
stdio.question('Introduce la editorial del libro',
function(err,editorialLibro) {
if (err) return callback(parametroCallback, autor);
editorial = editorialLibro;
stdio.question('Introduce la fecha de primera edicion',
function(err, fechaPrimeraEdicionLibro) {
if (err) return callback(parametroCallback, autor);
fechaPrimeraEdicion = fechaPrimeraEdicionLibro;
stdio.question('Introduce el ISBN del libro',
function(err,isbnLibro) {
if (err) return callback(parametroCallback, autor);
isbn = isbnLibro;
var libro = Libro();
libro.setTitulo(titulo);
libro.setEditorial(editorial);
libro.setAutor(autor);
libro.setFechaPrimeraEdicion(fechaPrimeraEdicion);
libro.setIsbn(isbn);
muestraLibro(libro, function() {
return callback(parametroCallback, autor);
});
});
});
});
});
};
function muestraLibro(libro, callback) {
var tituloObjeto =  libro.getTitulo();
var editorialObjeto = libro.getEditorial();
var autorObjeto = libro.getAutor();
var fechaPrimeraEdicionObjeto = libro.getFechaPrimeraEdicion();
var isbnObjeto = libro.getIsbn();
console.log('El titulo del libro es: ' + tituloObjeto + '.');
console.log('La editorial del libro es: ' + editorialObjeto + '.');
if ((!autorObjeto) || (autorObjeto === null)) {
console.log('El libro no tiene autor.');
} else {
var comprobacionFechaNacimiento =
autorObjeto.checkCampo('fechaNacimiento');
var formatoFechaAutorCorrecto = comprobacionFechaNacimiento();
var nombreCompletoAutorObjeto = autorObjeto.getNombreCompleto();
var fechaNacimientoAutorObjeto = autorObjeto.getFechaNacimiento();
var nacionalidadAutorObjeto = autorObjeto.getNacionalidad();
console.log('Nombre completo del autor: ' +
nombreCompletoAutorObjeto + '.');
console.log('Fecha de nacimiento del autor: ' +
fechaNacimientoAutorObjeto + '.');
if (formatoFechaAutorCorrecto) {
console.log('El formato de la fecha de nacimiento es correcto.');
} else {
console.log('El formato de la fecha de nacimiento no es correcto.');
}
console.log('La nacionalidad del autor es: ' +
nacionalidadAutorObjeto + '.');
}
console.log('La fecha de primera edición del libro es: ' +
fechaPrimeraEdicionObjeto + '.');
var comprobacionIsbnObjeto = libro.checkCampo('isbn');
var formatoIsbnCorrecto = comprobacionIsbnObjeto();
console.log('El ISBN del libro es: ' + isbnObjeto + '.');
if (formatoIsbnCorrecto) {
console.log('El formato del ISBN es correcto.');
} else {
console.log('El formato del ISBN no es correcto.');
}
stdio.question('Pulsa intro para continuar...', function() {
callback();
});
}
module.exports = controladorLibro;