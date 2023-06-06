let numero = 10;

for(let i=2; i<numero; i++){
    let teste = true;
    for(let j=2; j<i; j++){
        if(i%j==0){
            teste = false;
        }
    }
    if(teste){
        console.log(i,'é primo');
    }
}
