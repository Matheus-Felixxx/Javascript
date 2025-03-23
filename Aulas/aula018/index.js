var num = [5, 8, 7, 9, 3, 4]

num.push(1)
num.sort()
console.log(`o vetor e ${num}`)
console.log(`O vetor tem ${num.length} casa`)
console.log(`A primeira casa e ${num[0]}`)

var pos = num.indexOf(4)
if (pos == -1){
    console.log('O valor não existe')
}else{
console.log(`O valor 4 esta na possição ${pos}`)
}