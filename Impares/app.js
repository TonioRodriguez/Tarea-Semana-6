
function impares(num1, num2) {  
    num1 = Number(prompt('Menciona el rango inferior del listado de impares'));
    num2 = Number(prompt('Menciona el rango superior del listado de impares'));
    if( typeof num1 === '' || num2 === '') {
        alert('Escribe un número')
        impares()
    }
    else {
        if(!isNaN(num1) && !isNaN(num2)) {
            for(let i = num1; i <= num2; i++){
                if ( i % 2 === 1){
                    console.log(i)
                }            
            }
        }
        else {
            alert('Escribe un número')
            impares()
        }
    }
}

impares()