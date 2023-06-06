let prompt = require('prompt-sync')();

console.log('Digite 1 para somar');
console.log('Digite 2 para subtrair');
console.log('Digite 3 para dividir');
console.log('Digite 4 para multiplicar');

conta = Number(prompt('Qual o tipo de conta que você quer fazer? ')); 
primieroNumero = Number(prompt('Qual o primeiro numero? ')); 
segundoNumero = Number(prompt('Qual o segundo numero? ')); 

let total = 0;



switch(conta){
    case 1:
        total = primieroNumero+segundoNumero;
        console.log("Total: ",total);
        break;

        case 2:
            total = primieroNumero-segundoNumero;
            console.log("Total: ",total);
            break;

        case 3:
        total = primieroNumero/segundoNumero;
        console.log("Total: ",total);
        break;

        case 4:
            total = primieroNumero*segundoNumero;
            console.log("Total: ",total);
            break;

        default:
            console.log("Não é uma conta valida");
}

// let prompt = require('prompt-sync')();
// mes = Number(prompt('Qual o numero do mes que deseja? ')); 
// //let mes = 2;

// switch(mes){
//     case 1:
//         console.log("Janeiro");
//         break;

//         case 2:
//             console.log("Fevereiro");
//             break;
        
//         default:
//     console.log("Não é um mês valido");
// }