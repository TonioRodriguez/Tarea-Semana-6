function multiplicar(x) {
    x = prompt('Escribe el número del cuál desees la tabla de multpilicar')
    let i
    if (isNaN(x)) {
        console.log('Escribe un valor númerico')        
        multiplicar()
    }
    else {
        for ( let i = 1; i <= 10; i++){
            let n = x * i;
            console.log(x + '*' + i + '=' + n)
          }
    }
  }

  multiplicar()