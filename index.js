let factorial = 10;
let resultado = 1;
let contador = 1;

for(let i=1; i<=factorial; i++){
    
    resultado *= i;
    console.log(resultado);
}

resultado = 1;
while(contador <= factorial ){
    resultado *= contador;
    console.log(resultado);
    contador++;
}

resultado = 1;
contador = 1;
while(true){
    resultado *=contador;
    console.log(resultado);
    contador++;
    if(contador>10){
        break;
    }
    
}