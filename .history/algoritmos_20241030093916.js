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
//4. realizar un algoritmo que detemine el area de un triangulo a partir de la base y altura ingresadas por el usuario 
//5. realizar un algoritmo que determine lo quilometro pulgadas y metros de un valor dado en centrimetros 