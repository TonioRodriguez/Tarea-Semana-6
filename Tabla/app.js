function multiplicar() {
    let x = Number(prompt('Escribe el número del cuál desees la tabla de multpilicar'))
    if(x = ''){
        alert('Escribe un valor númerico')
        multiplicar()
    }
    else{
        if(!isNaN(x)) {
            for (let i = 1; i <= 10; i++){
                let n = x * i;
                console.log(x + 'x' + i + '=' + n)
            }
        }
        else {
            alert('Escribe un valor númerico')
            multiplicar()
        }
    }
}

multiplicar()

/*function multiplicar(x) {
  let i
  for ( let i = 1; i <= 10; i++){
    let n = x * i;
    console.log(x + '*' + i + '=' + n)
  }
}

multiplicar()*/
kkkk
