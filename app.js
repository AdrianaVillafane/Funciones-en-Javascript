

//1- Crear una función obtenerDiasMes que tome como argumento un string mes y devuelva un número dependiendo de la cantidad de días que tenga ese mes

let mes = prompt("¿Cual es el mes que quieres averiguar?");

const obtenerDiasMes = function (mes) {

        if (mes === 'Enero' || mes === 'Marzo' || mes === 'Mayo' || mes === 'Julio' || mes === 'Septiembre' || mes === 'Noviembre') {

                console.log(`${mes} tiene 31 dias`);
        }
        else if (mes === 'Febrero') {
                console.log(`${mes} tiene 28 días`);
        }
        else if (mes === 'Abril' || mes === 'Junio' || mes === 'Agosto' || mes === 'Octubre' || mes === 'Diciembre') {
                console.log(`${mes} tiene 30 días`);

        } else {
                console.log('No es un mes');
        }

}
obtenerDiasMes(mes);



//2 - Crear una función esPositivoONegativo que acepte como argumento un numero y devuelva el string positivo si el numero es positivo, o el string negativo si el numero es negativo

let numero = prompt('Dime un numero');

const esPositivoONegativo = function (numero) {
        if (numero > 0) {

                console.log(`Positivo`);
        }
        else if (numero < 0) {
                console.log(`Negativo`);
        }
}
esPositivoONegativo(numero);



//3 - Crear una función esParOImpar que acepte como argumento un numero y devuelva el string par si el numero es par, o el string impar si el numero es impar

let num = prompt('Dime un numero');

const esParOImpar = function (num) {
        if ((num % 2) == 0) {
                console.log(`Par`);
        } else if ((num % 2) == 1) {
                console.log(`Impar`);
        }
}
esParOImpar(num);


//4 - Crear una función puedeGraduarse que tome como argumentos dos números asistencia y materiasAprobadas y un booleano tesisAprobada, y devuelva true si una persona puede gruadarse o false si no.Una persona puede graduarse si tiene un 75 % de asistencia o más, 50 materias aprobadas o más y la tesis aprobada.

let asistencia = prompt('Porcentaje de asistencia');
let materiasAprobadas = prompt('Cuántas materias tiene aprobadas');
let tesisAprobada = prompt('Aprobo la tesis?Responda si ó no');

const puedeGraduarse = function (asistencia, materiasAprobadas, tesisAprobada) {
        if (asistencia >= 75 && materiasAprobadas >= 50 && tesisAprobada === "si") {
                console.log(`En buena hora, usted puede graduarse!`);
        } else {
                console.log(`Lo siento aún debe cumplir objetivos`);
        }
}

puedeGraduarse(asistencia, materiasAprobadas, tesisAprobada);


// 5- Crear una función puedeVerPeliculaque tome como argumentos un número edady un booleano tieneAutorizacion, y devuelva truesi la persona está habilitada para ver la película o falsesi no.Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.

let edad = prompt('¿Cuál es su edad?');
let tieneAutorizacion = prompt('Tiene autorización, responda si ó no.');

const puedeVerPelicula = function (edad, tieneAutorizacion) {
        if (edad >= 15 || tieneAutorizacion === 'si') {
                console.log(`True`);
        } else {
                console.log(`False`);
        }

}

puedeVerPelicula(edad, tieneAutorizacion);




// 6-Crear una función estaEnRango que tome como argumentos tres números, un valor, un número minimoy un número maximo, y devuelva truesi el valorse encuentra entre los números minimoy maximoo falsesi no(si el valores igual a uno de los extremos se considera que está dentro del rango)


let valor = prompt('Ingrese un valor');
let minimo = 1;
let maximo = 10;

const estaEnRango = function (valor, minimo, maximo) {
        if (valor >= minimo && valor <= maximo) {
                console.log(`True`)
        } else {
                console.log(`False`)
        }
}
estaEnRango(valor, minimo, maximo);





// 7-  Crear una función puedeAvanzarque tome como argumento un string con el color del semáforo y devuelva truesi puede avanzar o falsesi no.Si no se ingresa un color válido, debe devolver un string que diga: Error: color de semáforo inválido
let color = prompt('Ingrese el color en que está el semáforo');

const puedeAvanzar = function (color) {
        if (color === 'Verde') {
                console.log(`True`)
        } else (color === 'Amarillo' || color === 'Rojo')
        {
                console.log(`False`)
        }
}
puedeAvanzar(color);


//  8-  Crear una función esVocal que tome como argumento un string letray devuelva truesi letraes una voz o falsesi no lo es.
let letra = prompt('Ingrese una letra');

const esVocal = function (letra) {
        if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
                console.log(`true`)
        } else {
                console.log(`false`)
        }
}

esVocal(letra)



// 9- Crear una función esConsonante que tome como argumento un string letray devuelva truesi letraes una consonante o falsesi no lo es

let unaLetra = prompt('Ingrese una letra');

const esConsonante = function (unaLetra) {
        if (unaLetra === 'a' || unaLetra === 'e' || unaLetra === 'i' || unaLetra === 'o' || unaLetra === 'u') {
                console.log(`false`)
        } else {
                console.log(`true`)
        }
}
esConsonante(unaLetra);



// 10-   Crear una función esHoraValida que tome como argumento un string hora con el formato HH:mmy determine si es una hora válida del día o no

let hora = prompt('Ingrese una hora, con dos digitos');

const esHoraValida = function (hora) {
        if (hora >= 00 && hora < 25) {
                console.log(`Es una hora válida`)
        } else {
                console.log(`Hora NO válida`)
        }
}


esHoraValida(hora)


// 11-    Crear una función puedeRenovarCarnetque tome como argumentos tres booleanos, pasoTests, tieneMultasImpagasy pagoImpuestos, y devuelva truesi una persona está habilitada para renovar su carnet de conducir o falsesi no.Una persona puede renovar su carnet si pasó los tests, no tiene multas impagas y pagó todos los impuestos

let pasoTests = prompt('Aprobo el test, responda si ó no');
let tieneMultasImpagas = prompt('Tiene multas impagas, responda si ó no');
let pagoImpuestos = prompt('Pago todos los impuestos, responda si ó no');

const puedeRenovarCarnet = function (pasoTests, tieneMultasImpagas, pagoImpuestos) {
        if ( pasoTests === 'si' && tieneMultasImpagas === 'no' && pagoImpuestos === 'si' ){
                console.log(`True`)
        } else {
                console.log(`false`)
        }
}
puedeRenovarCarnet(pasoTests, tieneMultasImpagas, pagoImpuestos)



puedeGraduarse(asistencia, materiasAprobadas, tesisAprobada)
 // 12-     Crear una función puedeGraduarseque tome como argumentos dos números asistenciay materiasAprobadasy un booleano tesisAprobada, y devuelva truesi una persona puede gruadarse o falsesi no.Una persona puede graduarse si tiene un 75 % de asistencia o más, 50 materias aprobadas o más y la tesis aprobada.

 let asistenciaN = prompt('Porcentaje de asistencia');
 let materiasAprobadasN = prompt('Cuántas materias tiene aprobadas');
 let tesisAprobadaN = prompt('Aprobo la tesis?Responda si ó no');
 
 const puedeGraduarseN = function (asistenciaN, materiasAprobadasN, tesisAprobadaN) {
         if (asistenciaN >= 75 && materiasAprobadasN >= 50 && tesisAprobadaN === "si") {
                 console.log(`En buena hora, usted puede graduarse!`);
         } else {
                 console.log(`Lo siento aún debe cumplir objetivos`);
         }
 }
 
 puedeGraduarse(asistenciaN, materiasAprobadasN, tesisAprobadaN);


   //   ejercicios con condicionales
esParOImpar(numero)
 //13-     Crear una función esParOImparque acepte como argumento un numeroy devuelva el string parsi el numeroes par, o el string imparsi el numeroes impar

 let numX = prompt('Dime un numero');

 const esParOImparX = function (numX) {
         if ((numX % 2) == 0) {
                 console.log(`Par`);
         } else if ((numX % 2) == 1) {
                 console.log(`Impar`);
         }
 }
 esParOImparX(numX);
 


esPositivoONegativo(numero)
 // 14-     Crear una función esPositivoONegativoque acepte como argumento un numeroy devuelva el string positivosi el numeroes positivo, o el string negativosi el numeroes negativo
 /*let num = prompt('Dime un numero');

 const esParOImpar = function (num) {
         if ((num % 2) == 0) {
                 console.log(`Par`);
         } else if ((num % 2) == 1) {
                 console.log(`Impar`);
         }
 }
 esParOImpar(num);
 */
  
//obtenerGeneracion(anioNacimiento)
 // 15-     Crear una función obtenerGeneracionque tome como argumento un número anioNacimientoy devuelva un string con la generación a la que pertenece, siga estas reglas:
      /*     Generación	años de nacimiento
      Baby Boomer	1949 - 1968
      Generación X	1969 - 1980
      Millennials	1981 - 1993
      Generación Z	1994 - 2010
      */
 let anioNacimiento = Number(prompt('En que año nacio usted?'));

 const obtenerGeneracion = function (anioNacimiento) {
        if (anioNacimiento >= 1949 && anioNacimiento <= 1968) {
                console.log(`Eres de la generación Baby Boomer`)
        } else if ( anioNacimiento >= 1969 && anioNacimiento <= 1980) {
                console.log(`Eres de la  Generación X`)
        } else if ( anioNacimiento >= 1981 && anioNacimiento <= 1993) {
                console.log( `Eres de la generación Millenials`)
        } else (anioNacimiento >= 1994 && anioNacimiento <= 2010) {
                console.log(`Eres de la Generacion Z`)
        }
 }
 obtenerGeneracion(anioNacimiento);

 
      
 //obtenerSensacion(temperatura)
 // 16-     Crear una función obtenerSensacionque tome como argumento un número temperaturay devuelva un string dependiendo de la temperatura, con las siguientes reglas:
 /*Temperatura	mensaje
 Menor a 0°	¡Está helando!
 mayor o igual a 0° y menor a 15°	¡Hace frío!
 mayor o igual a 15° y menor a 25°	esta lindo
 Mayor o igual a entre 25° y menor a 30°	hace calor
 Mayor o igual de 30°	¡Hace mucho calor! */

 let temperatura = Number(prompt('Indique la temperatura'));

 const obtenerSensacion = function (temperatura) {
         if ( temperatura < 0 ) {
                 console.log(`¡Está helando!`)
         } else if (temperatura >= 0 && temperatura < 15) {
                 console.log(`¡Hace frío!`)
         } else if (temperatura >= 15 && temperatura < 25) {
                 console.log(`Está lindo`)
         } else if (temperatura >= 25 && temperatura <= 30) {
                 console.log(`Hace calor`)
         } else if ( temperatura >= 30) {
                 console.log(`¡Hace mucho calor!`)
         }
 }
 obtenerSensacion(temperatura);

    

//obtenerNota(puntaje)
 // 17-     Crear una función obtenerNota que tome como argumento un número puntajey devuelva un string dependiendo del puntajeredondeado, con las siguientes reglas:
/* Puntaje	No un
 Menor a 6	desaprobado
 mayor o igual a 6 y menor a 7	Regular
 mayor o igual a 7 y menor a 8	Bueno
 mayor o igual a entre 8 y menor a 10	muy bueno
10	Excelente
 menor a 0 o mayor a 10	Puntaje inválido */

 let puntaje = Number(prompt('Indique su puntaje'));
 
 const obtenerNota = function (puntaje) {
        if (puntaje < 6) {
                console.log(`Desaprobado`)
        } else if ( puntaje >= 6 && puntaje < 7) {
                console.log(`Regular`)
        } else if (puntaje >= 7 && puntaje < 8) {
                console.log(`Bueno`) 
        } else if (puntaje >= 8 && puntaje < 10) {
                console.log(`Muy bueno`)
        } else if (puntaje = 10) {
                console.log(`Excelente!`)
        } else if (puntaje < 0 || puntaje > 10) {
                console.log(`Puntaje Inválido`)
        }
 }
 obtenerNota(puntaje);
   

jugarPiedraPapelTijera(a, b)
 // 18-     Crear una función jugarPiedraPapelTijeraque tome como argumentos dos cadenas ay bque representen una jugada(piedra, papel, tijera) y dependiendo el devuelva una cadena con un mensaje avisando qué jugada ganó(o si hubo empate)
let a = prompt('Elija: Piedra, Papel ó Tijera');
let b = prompt('Elija: Piedra, Papel ó Tijera');

const jugarPiedraPapelTijera = function(a,b) {
        if ( a === 'tijera' && b === 'piedra') {
                console.log(`¡Ganó Piedra!`) 
        } else if ( a === 'piedra' && b === 'tijera') {
                console.log(`¡Ganó Piedra!`)
        } else if ( a === 'papel' && b === 'piedra') {
                console.log(`¡Ganó Papel!`)
        } else if ( a === 'piedra' && b === 'papel') {
                console.log( `¡Ganó Papel!`)
        } else if ( a === 'papel' && b === 'tijera') {
                console.log( `¡Ganó Tijera!`)
        } else if ( a === 'tijera' && b === 'papel') {
                console.log(`¡Ganó Tijera!`)
        } else if ( a === 'piedra' && b === 'piedra') {
                console.log(`¡Empate!`)
        } else if ( a === 'papel' && b === 'papel') {
                console.log( `¡Empate!`)
        } else if ( a === 'tijera' && b === 'tijera') {
                console.log(`¡Empate!`)
        }
}
jugarPiedraPapelTijera(a,b);

/*jugarPiedraPapelTijera('tijera', 'piedra')  // ¡Ganó piedra!
jugarPiedraPapelTijera('piedra', 'tijera')  // ¡Ganó piedra!
jugarPiedraPapelTijera('papel', 'piedra')   // ¡Ganó papel!
jugarPiedraPapelTijera('piedra', 'papel')   // ¡Ganó papel!
jugarPiedraPapelTijera('papel', 'tijera')   // ¡Ganó tijera!
jugarPiedraPapelTijera('tijera', 'papel')   // ¡Ganó tijera!
jugarPiedraPapelTijera('piedra', 'piedra')  // ¡Empate!
jugarPiedraPapelTijera('papel', 'papel')    // ¡Empate!
jugarPiedraPapelTijera('tijera', 'tijera')  // ¡Empate!*/