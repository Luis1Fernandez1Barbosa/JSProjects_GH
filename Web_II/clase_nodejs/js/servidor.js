var NPUERTO = 1800;
// El paquete http viene por defecto en la instalación de node.js.
var http = require('http');
var funcionServidora = function(request,response) {
response.writeHead(200, { 'Content-Type' : 'text/plain' } );
response.end('Hola Mundo!');
};
var server = http.createServer(funcionServidora).listen(NPUERTO);
console.log('Servidor escuchando en el puerto '+NPUERTO+'...');