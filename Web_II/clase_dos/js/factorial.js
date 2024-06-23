function factorial(n) {
    if (n % 1 == 0) {
    if (n>0) {
    return n*factorial(n-1);
    } else {
    return 1;
    }
    } else {
    return -1;
    }
    } 
    
    var assert = require('assert');
    it('Correcto el factorial de 5',function(){
    assert.equal(factorial(5),120);
    });
    it('Correcto el factorial de 6',function(){
    assert.equal(factorial(6),720);
    });
    it('Correcto el factorial de 7',function(){
    assert.equal(factorial(7),5040);
    });
    it('Correcto el factorial de 8',function(){
    assert.equal(factorial(8),40321);
    });