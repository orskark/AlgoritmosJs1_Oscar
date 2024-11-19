// tipos de datos primitivos
let nombre = "Felipe"; //declaramos e inicializamos la variable nombre
let edad = 27;
let mayorEdad = true;
let vacio = null;
let xyz;

console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof mayoredad);
console.log(typeof vacio);
console.log(typeof xyz);


//tipos de datos compuestos

let frutas = ["pera","mazana","sandia"]; // sera de tipo objeto arreglo
console.log(typeof frutas)

let auto = {
    marca: "mazda",
    modelo: 2024,
    color: "azul",
    placa: "UEH66G",
    tipo: "camioneta",
    unicoDueño: true
}
console.log(typeof frutas);
console.log(typeof auto);

// contatenando variables

console.log("hola  " + nombre + " tienes " + edad + " años ");


// estructuras condicionales 

console.log("----------------------");

let calificacion = 78;

if (calificacion >= 90)  {
    console.log("muy buen trabajo  " + nombre + " su nota fue " + calificacion);
}
else if (calificacion>= 70){
    console.log("Aprobaste " + nombre +  " tu nota fue" + calificacion);
}
else if (calificacion>=50){
    console.log("Reprobaste " + nombre +  " tu nota fue" + calificacion);
}
else {
    console.log("Tremendo perdedor " + nombre +  " su porqueria de nota es " + calificacion);
}

console.log("------------------------------------")

let dia = "sabado";

switch (dia) {
    case "lunes":
            console.log("empezando semana, que perza!!")      
        break;
    case "martes":
            console.log("peor que lunes ")      
        break;
    case "miercoles":
            console.log("mitad de semana por fin")
        break;
    case "jueves":
                console.log("juvernes")      
        break;
    case "viernes":
            console.log("que no me esperen en casa")      
        break;
    case "sabado":
            console.log("pasando guayabo")      
        break;
    case "domingo":
            console.log("misa o culto")      
        break;

    default:
        console.log("no es un dia de la semana")
        break;
}

// estructura de bucles

console.log("------------------------------")
let numero = 1;

while (numero <= 10){
    console.log("ahora el numero es: " + numero);
    numero ++;
}
//let i = 10;

for(let i = 100; i >=0;  i = i -10 ){
    console.log(" este es el numero  " + i)
}

// funciones 

function suma(valor1, valor2){
    return valor1 + v
}