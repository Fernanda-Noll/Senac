// 
// let somapar = 0;
// let somaimpar = 0;

//     for(let i=0; i <vetor.length; i++ ){
//         if(vetor[i]%2==0){
          
//             somapar+=vetor[i];
//         }
//         if(vetor[i]%2==1){
            
//             somaimpar+=vetor[i];
//           //  somaimpar++; = pega quantas vezes passou algum número 
//           //  somaimpar+=vetor; = pega o tudo que esta dentro do vetor e repete 
//           //  somaimpar+=i;
//         }

//     }

//     console.log('A soma dos números pares é ', somapar); //34
//     console.log('A soma dos números impares é ', somaimpar); //18


let vetor = [30,55,26,12,54,88,92,14];
let menor = vetor[0];

let maior = vetor[0]; 
let posicaomaior = 0;
let posicaomenor = 0;
let menortotal = 0;
let maiortotal = 0;


    for(let i=0; i <vetor.length; i++ ){
         if(vetor[i]>maior){
            maiortotal=vetor[i];
            posicaomaior = i;
            
         }
        if(vetor[i]<menor){
            menortotal=vetor[i];
            posicaomenor = i;
           
        }  
         
    }
    console.log('Esse é o maior número ',maiortotal,'sua posição é ',posicaomaior);
    console.log('Esse é o menor número ',menortotal,'sua posição é ',posicaomenor);