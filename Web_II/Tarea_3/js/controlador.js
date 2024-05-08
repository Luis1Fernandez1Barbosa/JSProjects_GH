var Autor = require('../js/autor.js');
var Libro = require('../js/libro.js');
var assert = require('assert');
var autor = Autor();
autor.setNombreCompleto('Ismael López Quintero');
autor.setFechaNacimiento('04/07/1983');
autor.setNacionalidad('Española');
var libro = Libro();
libro.setTitulo('Modelo del dominio con Node.js');
libro.setEditorial('Publicaciones Universitarias SL');
libro.setAutor(autor);
libro.setFechaPrimeraEdicion('06/02/2015');
libro.setIsbn('978-15-678213-8-0');
// Código de inserción o extracción en Base de Datos.
var tituloLibro = libro.getTitulo();
var editorialLibro = libro.getEditorial();
var autorLibro = libro.getAutor();
var fechaPrimeraEdicionLibro = libro.getFechaPrimeraEdicion();
var isbnLibro = libro.getIsbn();
var comprobacionIsbn = libro.checkCampo('isbn');
var isbnCorrecto = comprobacionIsbn();
var nombreAutor = autorLibro.getNombreCompleto();
var fechaNacimiento = autorLibro.getFechaNacimiento();
var comprobacionFechaNacimiento = autorLibro.
checkCampo('fechaNacimiento');
var correctaFechaNacimiento = comprobacionFechaNacimiento();
var nacionalidad = autorLibro.getNacionalidad();
it('Correcto el Título del Libro',function(){
assert.equal(tituloLibro,'Modelo del dominio con Node.js');
});
it('Correcta la Editorial del Libro',function(){
assert.equal(editorialLibro,'Publicaciones Universitarias SL');
});
it('Correcto el Nombre Completo del Autor',function(){
assert.equal(nombreAutor,'Ismael López Quintero');
});
it('Correcto el formato de la Fecha de Nacimiento del Autor',function(){
assert.ok(correctaFechaNacimiento);
});
it('Correcta la Fecha de Nacimiento del Autor',function(){
assert.equal(fechaNacimiento,'04/07/1983');
});
it('Correcta la Nacionalidad del Autor',function(){
assert.equal(nacionalidad,'Española');
});
it('Correcta la Fecha de Primera Edición del Libro',function(){
assert.equal(fechaPrimeraEdicionLibro,'06/02/2015');
});