var stdio = require('stdio');
var Autor = require('../js/autor.js');
var controladorAutor = function(callback,parametroCallback) {
var nombreCompleto = '';
var fechaNacimiento = '';
var nacionalidad = '';
stdio.question('Introduce el nombre del autor', function (err,
nombreCompletoAutor) {
if(err) return callback(parametroCallback);
nombreCompleto = nombreCompletoAutor;
stdio.question('Introduce la fecha de nacimiento del autor',
function (err, fechaNacimientoAutor) {
if(err) return callback(parametroCallback);
fechaNacimiento = fechaNacimientoAutor;
stdio.question('Introduce la nacionalidad del autor', function
(err, nacionalidadAutor) {
if(err) return callback(parametroCallback);
nacionalidad = nacionalidadAutor;
var autor = Autor();
autor.setNombreCompleto(nombreCompleto);
autor.setFechaNacimiento(fechaNacimiento);
autor.setNacionalidad(nacionalidad);
muestraAutor(autor,function(){
return callback(parametroCallback,autor);
});
});
});
});
};
function muestraAutor(autor,callback) {
var comprobacionFechaNacimiento = autor.checkCampo('fechaNacimiento');
var formatoFechaCorrecto = comprobacionFechaNacimiento();
var nombreCompletoObjeto = autor.getNombreCompleto();
var fechaNacimientoObjeto = autor.getFechaNacimiento();
var nacionalidadObjeto = autor.getNacionalidad();
console.log('Nombre completo del autor: '+nombreCompletoObjeto+'.');
console.log('Fecha de nacimiento del autor: '+
fechaNacimientoObjeto+'.');
if (formatoFechaCorrecto) {
console.log('El formato de la fecha de nacimiento es correcto.');
} else {
console.log('El formato de la fecha de nacimiento no es correcto.');
}
console.log('La nacionalidad del autor es: '+nacionalidadObjeto+'.');
stdio.question('Pulsa intro para continuar...', function() {
callback();
});
}
module.exports = controladorAutor;