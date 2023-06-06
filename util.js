
function receberNumero(descriacao){
let prompt = require('prompt-sync')();
const numero = Number(prompt(`Digite um número: `));
            if(numero%2==0){
                console.log(`O número é par e seu valor é ${numero}`);          
            }   
            else if(numero%2!=0){
                console.log(`O número é impar e seu valor é ${numero}`);         
            }  
return
}



module.exports={
 receberNumero
}

