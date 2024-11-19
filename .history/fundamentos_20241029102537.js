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

let dia = "miercoles";

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
    default:
        break;
}



