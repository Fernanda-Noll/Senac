// < menor 
// <= menor ou igual 
// > maior
// >= maior ou igual 
// == igual 

// const salario = 2220.00;


// if(salario<=400.00){
//     reajuste = (salario *0.15);
//     total = (reajuste + salario);
//     console.log('O valor do seu reajuste do salário é ', reajuste,'\n'); 
//     console.log('O valor do seu salário total é ', total,'\n'); 
//     console.log('Porcentagem de aumento é 15%'); 
// }

// else if(salario>=400.01 && salario<=800.00){
//     reajuste = (salario *0.12);
//     total = (reajuste + salario);
//     console.log('O valor do seu reajuste do salário é ', reajuste,'\n'); 
//     console.log('O valor do seu salário total é ', total,'\n'); 
//     console.log('Porcentagem de aumento é 12%'); 
// }

// else if(salario>=800.01 && salario<=1200.00){
//     reajuste = (salario *0.10);
//     total = (reajuste + salario);
//     console.log('O valor do seu reajuste do salário é ', reajuste,'\n'); 
//     console.log('O valor do seu salário total é ', total,'\n'); 
//     console.log('Porcentagem de aumento é 10%'); 
// }

// else if(salario>=1200.01 && salario<=2000.00){
//     reajuste = (salario *0.07);
//     total = (reajuste + salario);
//     console.log('O valor do seu reajuste do salário é ', reajuste,'\n'); 
//     console.log('O valor do seu salário total é ', total,'\n'); 
//     console.log('Porcentagem de aumento é 7%'); 
// }

// else if(salario>2000.00){
//     reajuste = (salario *0.04); //reajuste = (salario%4) - NÃO É A MESMA COISA  
//     total = (reajuste + salario);
//     console.log('O valor do seu reajuste do salário é ', reajuste,'\n'); 
//     console.log('O valor do seu salário total é ', total,'\n'); 
//     console.log('Porcentagem de aumento é 4%'); 
// }


// total = (salario*0.04 + salario)

// const valorEntrada = 101;

// if (valorEntrada >= 0 && valorEntrada <=25){
//     console.log('Valor de entrada',valorEntrada,' Intervalo [0,25]');

// }

// else if (valorEntrada >= 25.1 && valorEntrada <=50){
//     console.log('Valor de entrada',valorEntrada,' Intervalo [25,50]');

// }


// else if (valorEntrada >= 50.1 && valorEntrada <=75){
//     console.log('Valor de entrada',valorEntrada,' Intervalo [50,75]');

// }

// else if (valorEntrada >= 75.1 && valorEntrada <=100){
//     console.log('Valor de entrada',valorEntrada,' Intervalo [75,100]');

// }
// else{
//     console.log('Fora do intervalo');
// }


// for(let i = 1; i<=6; i++){
//     console.log(i);
// }

//  for(let i = 10; i>=1; i--){
//      console.log(i);
//  }

// for(let i = 1; i<=10; i++){
//     const total = i%2;

//         if(total == 0){
//             console.log("Este número é par!",i,'\n');
//     }   
//        else if(total == 1){
//             console.log("Este número é ímpar!",i,'\n');
//     }
   
//      }

let soma =0; 
let soma2 =0; 
    for(let i = 0; i<=20; i++){  
        const resto = i%3;
 
        if(resto == 0 ){
        soma = soma + i; //soma += i
            
}

}
console.log(soma); 

    for(let a = 0; a<=20; a++){  
        const resto1 = a%5;

        if(resto1 == 0 ){
        soma2 = soma2 + a; 
      
}

}
console.log(soma2); 
let total = soma+soma2;
console.log('Total: ', total);
      
// let , var , const 