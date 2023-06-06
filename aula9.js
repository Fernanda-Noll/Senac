let prompt = require('prompt-sync')();
// let itens =Number(prompt('Quantidade de itens totais: '));

// let total = 0;


//     for(let i = 1; i<=itens;i++){
//         if(itens<50){
//         total = i*1.99;
//             console.log(`${i}*1.99 =`,total)
        
//         }else{
//             console.log('Você informou itens a mais que o permitido');
//         }
//     }
// console.log('Valor do item 1.99, quantidade de itens',itens,'O valor total é ',total);

// let prompt = require('prompt-sync')();


let total = 0;
let itens =0;
let troco =0;


// for(let i=1; i<=5; i++){
//     while(produto!=0){

    do{
    produto = Number(prompt('informe o valor do produto: '));
    total+=produto;
    itens++;
    }while(produto!=0)
        
        console.log('Valor',produto);
        
        if(produto==0){
            console.log('Valor',produto);
            
        }

console.log(`Total de itens: `,itens);
console.log(`Valor total: `,total);
let dinheiro =Number(prompt('Valor recebido: '));
troco=dinheiro-total;
console.log(`Seu troco é: `,troco);


// let prompt = require('prompt-sync')();
// let soma = 0;
// let media = 0;
// let i = -1;
// let minimo = 0;
// let minimo1 = 0;
// let maximo = 0; 




// do{
//     console.log('Para para o programa digite 0');
//     temperatura = Number(prompt('informe a temperatura: '));
//     let a = Array(temperatura);
//     soma+=temperatura;
//     i++;
    
    
//     if(minimo>a){
//         minimo1=a;
//     }

//     if(maximo<temperatura){
//         maximo=temperatura;
//     }

// }while(temperatura!=0)


//     if(temperatura==0){
//         console.log('Encerrando');
//     }
// media=soma/i;
// console.log('Temperatura maxima: ',maximo);
// console.log('Temperatura minima: ',minimo1);
// console.log('Temperatura media: ',media);
// < menor 
// <= menor ou igual 
// > maior
// >= maior ou igual 

// let j = 0;

// let media = 0;
// let soma = 0;
// let prompt = require('prompt-sync')();
// let totalTemperatura = Number(prompt('Informe a quantidade total de temperaturas: '));
// let maior1 = 0;
// let menor1 = 0;   
// let a = Array();


// for(let i =1;i<=totalTemperatura;i++){
//     let temperatura = Number(prompt('informe a temperatura: '));
//     a[i]=temperatura;
//     soma+=temperatura;
//     let menor = a[1];
//      let maior = a[1];

//     if(a[i]>maior){
//         maior=a[i];
//         maior1 = maior;
        
        
//      }
//     if(a[i]<menor){     /// a[menor1]
//         menor=a[i];
//         menor1= a[i];
       
//     }  
//    j++;
// }
// media=soma/j;

// console.log(`A média é ${media}`);
// console.log(`Maior temperatura é ${maior1}`);
// console.log(`Menor temperatura é ${menor1}`);