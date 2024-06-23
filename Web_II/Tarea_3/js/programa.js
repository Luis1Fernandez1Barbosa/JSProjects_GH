var stdio = require('stdio');
var controladorAutor = require('../js/controladorAutor.js');
var controladorLibro = require('../js/controladorLibro.js');
var opcion = null;
do {
    console.log('1.- Formulario de un autor.');
    console.log('2.- Formulario de un libro.');
    console.log('3.- Salir.');
    stdio.question('Elige entrada: ', ['1', '2', '3'], function (err, entrada) {
        if (!err) {
            opcion = entrada;
            if (opcion === '1') {
                controladorAutor();
            } else if (opcion === '2') {
                controladorLibro();
            }
        }
    });
} while (opcion !== '3');