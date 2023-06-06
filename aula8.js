
// let par = 0;
// let impar = 0;

// for(let i = 0; i <10; i++){
//     let prompt = require('prompt-sync')();
//     let numero = prompt('Informe o número: ');

//     if(numero%2==0){
//         par++;             
//     }   
//         else if(numero%2!=0){
//             impar++;          
//         }

// }
// console.log('Numeros pares: ',par);
// console.log('Numeros impares: ',impar);

// //let total = 0;
// let total1 = 0;

// let prompt = require('prompt-sync')();
// let base = prompt('Informe a base: '); 
// let expoente = prompt('Informe o expoente: '); 


// total1=base*base;

//     for(let i = 2; i <expoente; i++){ //começa na linha dois pq é o primeiro vezes o segundo 
//      //   total*=base;
        
//         total1 = (total1*base);
           
//     }
 
// //total=base**expoente;
//     console.log('Total: ',total1);

let valor = 0;
let media = 0;

let prompt = require('prompt-sync')();
let cds = prompt('Quantos CDs você possui? '); 

    for(let i =1; i<=cds;i++){     
        valorcd = Number(prompt('Informe o valor do CD: '));            
        valor+=valorcd;       
    }
    
    media = valor/cds;

console.log('Valor total dos CDs: ',valor);
console.log('Valor total dos CDs: ',media);
