    QUnit.test( "Prueba", function( assert ) {
    /*let testAsincrono;      = assert.async();*/
    /*assert.expect(7);
    require(['../js/gerente.js','../js/habitacion.js','../js/hotel.js'],function(){*/
    let habitacion = new habitacion();
    habitacion.setPlanta('3')
    habitacion.setNumeroCamas('04/07/1983');
    habitacion.setTelefono('2345')
    
    let hotel = new hotel();
    hotel.setCiudad('CDMX')
    hotel.setDireccion('GAM')
    hotel.setTelefono('5543321')
    hotel.setHabitacion('4')

    let ciudadH = hotel.getCiudad();
    let direccionH = hotel.getDireccion();
    let telefonoH = hotel.getTelefono();
    let habitacionesH = hotel.getHabitacion();
    let plantah = habitacion.getPlanta();
    let numeroCamash = habitacion.getNumeroCamas();
    let telefonoh = habitacion.getTelefono();

    console.log(hotel);
    console.log(habitacion.getTelefono);
    habitacion.setTelefono = "4254243";
    console.log(habitacion.getTelefono);
    
    document.getElementById('datos').innerHTML= ciudadH;
    document.getElementById('datos1').innerHTML= hotel.getDireccion;
    document.getElementById('datos2').innerHTML= habitacion['Planta'];


    assert.equal(ciudadH,'CDMX','Título correcto');
    assert.equal(direccionH,'GAM','Editorial correcta');
    assert.equal(telefonoH,'5543321','Fecha primera edición correcta');
    assert.equal(habitacionesH,'4','ISBN correcto');
    assert.equal(plantah,'3','Nombre del autor correcto');
    assert.equal(numeroCamash,'04/07/1983','Fecha de nacimiento del autor correcto');
    assert.equal(telefonoh,'2345','Nacionalidad correcta');

});