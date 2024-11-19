//1. algoritmo que realiza la suma entre 2 valores ingresados por el usuario

function suma (){
    // declaro las variables necesarias para este algoritmo
    let A;
    let B;
    let S;

    //solicito los valores al usuario 

    A = parseInt(prompt("ingrese el primer valor a sumar"))
    B = parseInt(prompt("ingrese el segundo valor a sumar"))

    // realizas la opreacion 

    S = A + B;

    //mostrar resultado

    console.log("El resultado de la suma es:  " + S)
    alert("El resultado de la suma es:  " + S)
}
//2. algoritmo que determina la suma, resta, multiplicaciopn y divicion entre dos valores ingresados
function opBasicas(){
    let C;
    let D;

    C = parseInt(prompt("ingrese el primer valor "))
    D = parseInt(prompt("ingrese el segundo valor "))

    SU = C + D;
    R = C - D;
    M = C * D;
    D = C / D;

    console.log("El resultado de la suma es:  " + SU + " El resultado de la resta es:  " + R + " El resultado de la multiplicacion es:  " + M + " El resultado de la divicion es:  " + D)
    alert(" El resultado de la suma es:  " + SU + " El resultado de la resta es:  " + R + " El resultado de la multiplicacion es:  " + M + " El resultado de la divicion es:  " + D)


}

//3. ealizar un algoritmo que determine el cuadredao de un numero 
function cuadrado(){
    let numero1;

    numero1 = parseInt(prompt("ingrese el primer valor "))

    CU = numero1 * numero1

    console.log("El resultado del cuadrado es:  " + CU)
    alert(" El resultado del cuadrado es:  " + CU)



}

//4. realizar un algoritmo que detemine el area de un triangulo a partir de la base y altura ingresadas por el usuario 
function area(){
    let base;
    let altura;

    base = parseInt(prompt("ingrese la alutra "))
    altura = parseInt(prompt("ingrese la base "))

    ar = base * altura /2

    console.log("El resultado del area es   " + ar)
    alert(" El resultado del area  es:  " + ar)

}

//5. realizar un algoritmo que determine lo quilometro pulgadas y metros de un valor dado en centrimetros 
function conversion(){
    let cm;

    cm = parseInt(prompt("ingrese la alutra "))

    km = cm / 100000
    metros = cm / 1000
    pulgadas = cm / 2,54

    console.log("El resultado en km es:   " + km)
    alert(" El resultado del area  es:  " + ar)

}
//6,. ralizar un algoritmo qu determine el numero mayor de dos numeros ingresados
//7. el nuemro menor de tres numeros ingresados por el usuario 
//8. realizar un algoritmo que solicite a estudiante su nombre, la materia y 8 calificaciones entre uno y 10 determinar con esta informacion si ell estudiante aproba o reprbo teniendo en cuenta que se aprueba con 6.2 en adelante
//9 determinar si uyn numero ingresado por el estudiante es par o inpar 
//10. un individuo desae invertir en un banco y requiere saber cuanto dinero ganara despues de n numero de años teniendo en cuenta que el baco paga un interes mensual del 0,7%
//11.realizar un algoritmo que solicite al usuario un rango entre dos valores y muestre los numero que hay entre ellos