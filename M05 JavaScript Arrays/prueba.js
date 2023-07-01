
  // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".


// var meses = ['Julio', 'Septiembre', 'Marzo', 'Febrero', 'Diciembre', 'Noviembre', 'Enero'];
// var arrayCon = [];

// for (var i = 0; i <= meses.length; i++ ) {
//   if ((meses[i] == 'Enero') || (meses[i] == 'Marzo') || (meses[i] == 'Noviembre')) {
//     arrayCon.push(meses[i]);
//   }
// }

// if (arrayCon.length == 3) {
//   console.log(arrayCon);
// } else {
//   console.log('No se encontraron los meses pedidos');
// }

// var tabla6 = [];

// for (var i = 0; i <= 60; i=i+6) {
//   tabla6.push(i);
// }

// console.log(tabla6);


// Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retornarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
  // la ejecución y retornar el string: "Se interrumpió la ejecución".
  // [PISTA]: utiliza el statement 'break'.


// var suma = num + 2;
// var arregloNuevo = [suma];

//   for (var i = 0; i <= 10; i++) {
//     if (suma == i) {
//       console.log("Se interrumpió la ejecución");
//       break;
//     } else { arregloNuevo.push(suma + 2);
//       suma = suma +2;
//     }
//   }
//   console.log(arregloNuevo);

var num = -8;

var suma = num + 2;

var arregloNuevo = [];
for (var i = 0; i <= 10; i++) {
  if (i == 5) {
    num +=2;
    continue;

  } 
  arregloNuevo.push(num +=2);
}
console.log(arregloNuevo);
