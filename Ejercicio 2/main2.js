let numero1 = 2;
let numero2 = 10;
let suma = numero1+numero2
let resta = numero1-numero2
let multiplicacion = numero1*numero2
let division = numero1/numero2

console.log("Primer numero = "+numero1);
console.log("Segundo numero = "+numero2);

console.log("La Suma de los dos es = "+ suma);
console.log("La Resta de los dos es = "+ resta);
console.log("La Multiplicacion de los dos es = "+ multiplicacion);
console.log("La Division de los dos es = "+ division);

//suma
if(suma % 2 == 0){
    console.log("Comparado con su suma ,es par");

}
else{
    console.log("Comparado con su suma ,es impar");
}

//resta
if(resta % 2 == 0){
    console.log("Comparado con su resta ,es par");

}
else{
    console.log("Comparado con su resta ,es impar");
}

//multiplicacion
if(multiplicacion % 2 == 0){
    console.log("Comparado con su multiplicacion ,es par");

}
else{
    console.log("Comparado con su multiplicacion ,es impar");
}

//division
if(division % 2 == 0){
    console.log("Comparado con su division ,es par");

}
else{
    console.log("Comparado con su division ,es impar");
}