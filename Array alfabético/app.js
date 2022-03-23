let frutas = ['naranja', 'fresa', 'sandia', 'uvas', 'cerezas', 'manzana']

function swap(frutas, indexOne, indexTwo){
    if( indexOne == indexTwo ){
      return frutas;
    }
    var tmpVal = frutas[indexOne];
    frutas[indexOne] = frutas[indexTwo];
    frutas[indexTwo] = tmpVal;
    return frutas;
}

function orden(frutas){
    var size = frutas.length;
    for( var slot = 0; slot < size -1; slot ++ ){ 
      var smallest = slot;
      for( var check = slot + 1; check < size; check++ ){
        if( frutas[check] < frutas[smallest] ){
          smallest = check;
        }
      }
      swap( frutas, smallest, slot );
    }
    return frutas;
}

console.log(orden(frutas));