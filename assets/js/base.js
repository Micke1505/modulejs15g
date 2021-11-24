/*
Ejercicio1: 
pedir 2 variables por prompt
Si a> b dividir a entre b
Si a < b sumar a mas b
Si a == b multiplicar ambos numeros 
Imprimir el resultado en consola

 My solution
var a;
var b;


a=prompt( "What is your first variable");
b=prompt( "What is your second variable");

var x =parseInt(a);
var y =parseInt(b);

if(x > y){
    console.log (a/b);
};

if(x < y){
    console.log (a+b);
};

if(x = y){
    console.log (a*b);
}; 
Solution in class*/
const a = parseInt(prompt('What is the first value??'));
const b = parseInt(prompt('What is the second value??'));

if( a > b){
    console.log (a/b)
}else if (a < b){
    console.log (a + b)
}else {
    console.log (a*b)
}