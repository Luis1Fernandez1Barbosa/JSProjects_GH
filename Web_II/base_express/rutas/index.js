import express from 'express';
import rutas from '.rutas/index.js';

const app=express();
app.set('view engine','png');
const port=process.env.PORT ||1900;

app.use('/',rutas);
app.listen(port,()=> {
    console.log('Servidor iniciando en el puerto' + port)
})