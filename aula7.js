// let numero = 20;

// for(let i=2; i<numero; i++){
//     let teste = true;
//     for(let j=2; j<i; j++){
//         if(i%j==0){
//             teste = false;
//         }
//     }
//     if(!teste){
//         console.log(i,'não é primo');
//     }
// }

// let soma ;



// let vetor = [30,55,26,12,54,88,92,14];

// let valortotal = 0; 
// let media = 0;
// let soma = 0;

//     for(let i=0; i <vetor.length; i++ ){
//         valortotal+= vetor[i];
      
//     }
    
//     media = valortotal/vetor.length;

// console.log('Valor total é ',valortotal);
// console.log('A média é ',media);


// let numero = 8;
// let soma = 0;
// let primeira = 0;
// let segunda = 1;
// let terceira = 0;


// for(let i = 0; i<numero; i++){
//     terceira=primeira+segunda; 
//         primeira=segunda;
//         segunda=terceira;
           
// console.log(primeira, '+', segunda, ' = ', terceira);
           
// }  

// let numero = 21;
// let resultado =0; 

// for(let i=0; i <numero;i++){
//     console.log(i);
//     resultado += i + ' ';
 
// }
// console.log(resultado);


let total =0;
let prompt = require('prompt-sync')();
let numero = prompt('Informe o número: ');
    for(let i=1; i<11; i++){
        total= i*numero;
        console.log(i,'*',numero,'=', total);
    }
