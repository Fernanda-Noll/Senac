let prompt = require('prompt-sync')();
let nome = prompt('Informe o nome do atleta: ');
let soma = 0;
let media = 0;
let a = [];
let total =0;

for(let i = 0; i<=4; i++){
    let salto = Number(prompt('informe o salto: '));
    a[i]=salto;
    soma+=salto;  
}

let menor = a[0];
let maior = a[0];

for(let j=0; j<=4; j++){
    if(a[j]>maior){
        maior=a[j];                   
     }
    if(a[j]<menor){     /// a[menor1]
        menor=a[j];      
    }  

}

total=(soma-maior-menor);
console.log(total);
media=total/3;
console.log(`O nome é ${nome} e a média é ${media}`);
console.log(`Melhor salto ${maior}`);
console.log(`Pior salto ${menor}`);