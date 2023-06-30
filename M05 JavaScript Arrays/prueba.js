
  // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".


var meses = ['Julio', 'Septiembre', 'Marzo', 'Febrero', 'Diciembre', 'Noviembre', 'Enero'];
var arrayCon = [];

for (var i = 0; i <= meses.length; i++ ) {
  if ((meses[i] == 'Enero') || (meses[i] == 'Marzo') || (meses[i] == 'Noviembre')) {
    arrayCon.push(meses[i]);
  }
}

if (arrayCon.length == 3) {
  console.log(arrayCon);
} else {
  console.log('No se encontraron los meses pedidos');
}
