let prompt = require('prompt-sync')();
let n =Number(prompt('Quantidade de números para testar '));
let vetor= Array(n);

for(let i =0; i<n; i++){
    vetor[i] = Number(prompt(`Elementos ${i}:`));
}
let contaPar = 0;
let contaImpar = 0;

for(let j=0; j<n; j++){
    if(vetor[j]%2==0){
        contaPar++;
    }else{
        contaImpar++;
    }
}

console.log(`Existem ${contaPar} numeros pares nesse vetor`);
console.log(`Existem ${contaImpar} numeros impares nesse vetor`);
