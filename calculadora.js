function sumar(a,b){
    return a + b;
}
function restar(a,b){
    return a - b;
}
function multiplicar(a,b){
    return a * b;
}
function dividir(a,b){
    return a / b;
}

function calculadora(a,b,operacion){
    if(!(typeof a == 'number' && typeof b == 'number')){
        console.log("Algun operando no es un numero");
        return;
    }
    /*
    if !(typeof a == 'number' && typeof b == 'number'){
        
    }
    */
    if(a === null || b === null){
        console.log("Al menos una variable es null no podes continuar")
        return;
    }
    if(a== undefined || b == undefined || operacion == undefined){
        console.log("Al menos un parametro no esta definido");
        return;
    }
    console.log("Ambos operandos son numeros podes continuar");
    switch(operacion){
        case "suma":
            console.log(sumar(a,b));
            break;
        case "resta":
            console.log(restar(a,b));
            break;
        case "multiplicacion":
            
            if (!( Number.isInteger(a) &&  Number.isInteger(b))){
                console.log("Al menos un numero no es entero")

            }else{
                console.log(multiplicar(a,b));
            }
            break;
        case "division":
            if(b == 0){
                console.log("La division por 0 no esta permitida, rompe la matrix")
            }else{
                console.log(dividir(a,b));
            }
            break;
    }
}

console.log("Inicio");
//calculadora(1,2,"suma");
//calculadora(1.8,2.5,"multiplicacion");
calculadora(1," ","suma");


