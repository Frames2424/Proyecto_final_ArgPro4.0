//Ejercicio 1
// Crea un array que contenga el nombre de cinco colores escritos como strings

const colors = ['Azul', 'Rojo', 'patas', 'Verde', 'Marron'];

//Ejercicio 2
// 2. Guarda en una variable el tercer elemento del array del ejercicio anterior.

var exercise2 = colors[2];
console.log(`El tercer color del array corresponde a ${exercise2}`);

//Ejercicio 3
// Por consola pedimos que busque el tercer elemento del array y luego con charAt pedimos el primer caracter del string.
console.log(colors[0].charAt(0));

//Ejercicio 4
// Se pide realizar un script que genere un número aleatorio entre 1 y 99. Investigue la función Math.random(). 

console.log(`El siguiente numero fue generado aleatoriamente ${Math.random(144)}`)

// Ejercicio 5
// Rellena un array con los números del 1 al 10. Muéstralo por la consola.

//Creo un array vacío
var arrayExcercise5 = [];

//Genero un for con la condición y uso la funcio .push para meter al final cada nuevo "digito".
for (var i = 1; i <= 10; i++){
    arrayExcercise5.push(i);
};
console.log(`El array fue rellenado desde el 1 al 10 y se presenta de la siguiente manera ${arrayExcercise5}`);


// Ejercicio 6
// Rellena un array con números aleatorios (10 por ejemplo). Muéstralo por la consola.

//Genero un array vacío
var oneToTen = [];

//Creo una función que me genere un número aleatorio entre un min y un max.

function getRandomInt(min,max){
    return Math.floor(Math.random() * (max - min)) + min;
}

//creo un for y llamo la funcion getRandomInt

for( i = 0; i <= 10; i++){
    oneToTen.push(getRandomInt(1,69));
}
console.log(oneToTen);


// Ejercicio 7
// 7. Del array anterior, créale una copia (que no sea el mismo en sí). Mostrarlos por la consola.
// creo un array y usando el método .slice "genero una copia no copia"
var exercise7 = oneToTen.slice();

// Introduzco algo para que se vea que no es copia
exercise7.push('caracoles soy un array diferente y aesthetic');
// Lo imprimo por consola.
console.log(exercise7);



//Ejercicio 8 
// Realiza un script que pida cadenas de texto hasta que se ingrese la palabra “cancelar”. Al salir
// con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión medio. Realizar la misma actividad, pero ahora almacenando los valores en un array y luego recoriendolo para mostrar el resultado deseado del ejercicio.

// texto = prompt('Ingrese una cadena de texto');
// arrayDataString = [];
// excercise8String = '';

// while (texto != 'cancelar'){
//     excercise8String = excercise8String.concat(texto,'-'); 
//     arrayDataString.push(texto);    
//     texto = prompt('Por favor ingrese otra cadena de texto');
// }
// arrayDataString.join('-');
// console.log(arrayDataString);
// console.log(excercise8String);

// Ejercicio 9 y 10 

function usdAmountEvent(event){
    event.preventDefault();
    var dolarValue = document.getElementById("usdAmount").value;
    localStorage.setItem("valorDolar", dolarValue);
    // document.write(`La cantidad de dólares es: ${dolarValue}`);
    
    var usdConverterTextScript = document.getElementById("usdConvertionText");

    usdConverterTextScript.innerHTML =  "Usted vende: " + dolarValue + " dolares y recibirá en pesos argentinos: " + (300 * dolarValue) ;

};
function pesoAmountEvent(event){
    event.preventDefault();
    var pesoAmountNumber = document.getElementById("pesoAmount").value;
    localStorage.setItem('pesoValue',pesoAmountNumber);
    // document.write(`La cantidad de pesos que ingresó es ${pesoAmountNumber}`);
    // document.write(`${pesoAmountNumber} pesos argentinos son ${(pesoAmountNumber / 300).toFixed(2)} dólares, agradezca al peronismo. `);

    var pesosConvertedTextScrip = document.getElementById("pesosConvertionText");
    pesosConvertedTextScrip.innerHTML = "Usted vende: " + pesoAmountNumber + " pesos y recibirá: " + (pesoAmountNumber / 300).toFixed(2) + " dólares";

};
// ejercicio 11

function temperatureEvent(event){
    event.preventDefault();
    var degreeNumber = document.getElementById("celsiusDegree").value;
    localStorage.setItem('degreeNumberValue', degreeNumber);
    var degreeNumberSolved = (degreeNumber * 1.8) + 32;
    var degreeTextSolved = document.getElementById("degreeSolved");
    degreeTextSolved.innerHTML = "Usted ingresó: " + degreeNumber + " los cuales convertidos a grados fahrenheit son en total: " + degreeNumberSolved ;
}


// ejercicio 12

function boxEvent(event){
    event.preventDefault();
    var boxOwnerName = document.getElementById("boxOwnerName").value;
    var boxType = document.getElementById("boxMaterialId").value;

    //Conseguir el valor de un input tipo radio:
    
    function obtainValue(){
        const boxSize = document.getElementsByName("size");
        for (let i = 0; i < boxSize.length; i++){
            if (boxSize[i].checked){
                const number1 = boxSize[i].value;
                return result = number1;
                

            }
        }

    }
    var textBox = document.getElementById("boxTextArea").value;
    var boxFormSolvedTextInner = document.getElementById("boxFormSolved");
    boxFormSolvedTextInner.innerHTML ="Gracias estimado/a: " + boxOwnerName + " su caja " + obtainValue() + " de " + boxType+ " se encuentra en camino. Gracias por sus comentarios. Aclaración: " + textBox;
}

function gameGuessEvent(event){
    event.preventDefault();
    var i = 0;
    while (i >= 0 && i <= 3){
     var numberGamedByUser = document.getElementById("userChoosenNumber").value;
     var computerNpc =  Math.floor((Math.random()*(5 - 0 +1)) + 0);
     

     i += i;
     if(numberGamedByUser >= 0 && numberGamedByUser <= 5){
        if(numberGamedByUser == computerNpc){
            console.log("GANASTE");
            console.log(computerNpc);
            break;
        }else{

             console.log("perdiste");
            }
        }
    }
}
