var vetor = [1,6,8,9,7]
vetor.sort()

/*for(var pos = 0; pos < vetor.length ; pos++){
    console.log(`A posição ${pos} tem o valor ${vetor[pos]}`)
}*/

for(let pos in vetor){
    console.log(`A posição ${pos} tem o valor ${vetor[pos]}`)
}