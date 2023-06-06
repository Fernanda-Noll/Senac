// const valor1 = 5;
// const valor2 = 6;
// const valor3 = 7;
// const valor4 = ;

// const diferenca = (valor1*valor2-valor3*valor4);

// console.log("A diferença é ",diferenca);


// const tempo = 10; //H
// const velocidade = 85; //KM
// const consumoCombustivel = 12; //L/KM

// const totalLitro = (tempo*velocidade/consumoCombustivel);

// console.log("Total em Litros ",totalLitro);


// const a = 2.2;

// console.log(2**5); elevado

// console.log(5/2); divisão

// console.log(5%2); sobra 


// console.log(parseInt(a));

// < menor 
// <= menor ou igual 
// > maior
// >= maior ou igual 
// == igual 
// === igual literal - compara se ambos são inteiros 
// != diferente
// || ou 
// && and ou e 
// if se 
// else if
// else

///console.log('1' === 1);
//console.log(1 === 1);
//console.log('1' == 1);
//console.log(1 != 1);

// const idade = 21;

//  if(idade>=18 && idade<70){
//     console.log("Você tem permissão");

// } 
// else if(idade==17){
//      console.log("Falta apenas um ano para ter acesso");

//  }
//  else{
//      console.log("Você não tem permissão");

//  }

// let mes = 1;

// switch(mes){
//     case 1:
//         console.log("Janeiro");
//         break;

//         default:
//     console.log("Não é um mês valido");
// }

// const numero = 12;
// const total = numero%2;

// if(total == 0){
//     console.log("Este número é par!")
// }
// else if(total == 1){
//     console.log("Este número é ímpar!")
// }


const peso = 70; //kg
const altura = 1.60; //m
const alturaaoquadrado = altura**2; //m
const imc = (peso / alturaaoquadrado); 

console.log("Seu IMC é ",imc);

if(imc<18.5){
    console.log("Magreza");

}

else if (imc>=18.5 && imc<=24.9){
    console.log("Normal");

}

else if (imc>= 25 && imc<=29.9){
    console.log("Sobrepeso");

}

else if (imc>=30 && imc<=34.9){
    console.log("Obsidade grau I");

}

else if (imc>=35 && imc<=39.9){
    console.log("Obsidade grau II");

}

else if (imc>40){
    console.log("Obsidade grau III");

}