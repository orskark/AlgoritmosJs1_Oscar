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

    console.log("El resultado en km es: " + km)
    alert(" El resultado en km es: " + km)

    console.log("El resultado en M es: " + metros)
    alert(" El resultado en M es: " + metros)

    console.log("El resultado en pulgadas es: " + pulgadas)
    alert(" El resultado en pulgadas es: " + pulgadas)


}
//6. ralizar un algoritmo que determine el numero mayor de dos numeros ingresados
function mayor(){
    let n1;
    let n2;

    n1 = parseInt(prompt("ingrese el primer numero: "))
    n2 = parseInt(prompt("ingrese el segundo numero: "))

    if(n1>n2){
        console.log("El numero mayor es: " + n1)
        alert(" El numero mayor es: " + n1)
    }

    else if (n2>n1){
        console.log("El numero mayor es: " + n2)
        alert(" El numero mayor es: " + n2)
    }

    else{alert(" los numeros son iguales: ")
    }
}

//7. el nuemro menor de tres numeros ingresados por el usuario 


function opMenor(){
    let nu1;
    let nu2;
    let nu3;

    nu1 = parseInt(prompt("ingrese el primer numero: "))
    nu2 = parseInt(prompt("ingrese el segundo numero: "))
    nu3 = parseInt(prompt("ingrese el primer numero: "))

    if(nu1<nu2 && nu1<nu3){
        console.log("El numero mayor es: " + nu1)
        alert(" El numero mayor es: " + nu1)
    }

    else if (nu2<nu3 && nu2<nu1){
        alert(" El numero mayor es: " + nu2)

    }

    else{ alert("el numero menor rd " + nu3)

    }

}

//8. realizar un algoritmo que solicite a estudiante su nombre, la materia y 8 calificaciones entre uno y 10 determinar con esta informacion si ell estudiante aproba o reprbo teniendo en cuenta que se aprueba con 6.2 en adelante
function notas(){
    let nombre;
    let materia;
    let nota1;
    let nota2;
    let nota3;
    let nota4;
    let nota5;
    let nota6;
    let nota7;
    let nota8;

    nombre = parseInt(prompt("ingrese su nombre: "))
    

}

//9 determinar si uyn numero ingresado por el estudiante es par o inpar 
//10. un individuo desae invertir en un banco y requiere saber cuanto dinero ganara despues de n numero de años teniendo en cuenta que el baco paga un interes mensual del 0,7%
//11.realizar un algoritmo que solicite al usuario un rango entre dos valores y muestre los numero que hay entre ellos