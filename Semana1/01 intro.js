// VAR
// no recomenda
// usado en ODOO 
var nombre = "Jorge";

// LET
// igual a var per omas seguro
// usar si cambia la memoria
let apellido = "Montesinos";

// CONST
// no permite modificación

const pi = 3.1416;

//Array

let nombres = ["A","B","C","D","F",]

//PUSH agregar

nombres.push("G");

//pop

nombres.pop();

//OBJETOS
let persona = {
    //clave:valor
    nombre:"Anthony",
    apellido:"Salas",
    edad:31,
    hobbies: ["ver peliculas","conversar"],
};
//console.log(persona);

//FUNCIONES

function sumar(a, b){
    return a + b;
}
console.log(sumar(10,5));

//FUNCION FLECHA
//se puede agregar parametro por defecto
let ladrar = (texto= "hola") => texto; 
//simplifica la sintaxis
const restar = (a, b) => {
    return a - b;
}

//CONDICIONAL
let x= true;

if(x === true){
    console.log("xxxxx");
} else{
    console.loh("-xxxxx");
}