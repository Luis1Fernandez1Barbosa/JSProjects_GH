import express from 'express';
const rutas=express.Router();
rutas.get('/',(req,res)=>{
    res.json({
        nombre: 'Miguel',
        id:'A1'
    });
});

rutas.get('/uno',(req,res)=>{
    res.render('uno');
});

rutas.get('/dos',(req,res)=>{
    res.render('uno');
    const datos='Datos de B:D';
    res.render('dos',{
        texto:datos
    });
});
export default rutas;