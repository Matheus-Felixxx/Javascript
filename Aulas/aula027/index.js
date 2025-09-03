/* Operador Spread */

/* Spread em arrays */

/* let n1 = [10,20,30]
let n2 = [11,22,33,44,55]
let n3 = [...n1,...n2]

console.log("n1: " + n1)
console.log("n2: " + n2)
console.log("n3: " + n3) */

/* Spread em objetos */

/* let p1 = {nome: "Bruno", energia: 100, vidas: 3, força: 20}
let p2 = {nome: "ronaldo", energia: 9999, vidas: 6, velocidade: 30}
let p3 = {...p1, ...p2}

console.log(p3) */

/* Spread em funções */

/* let soma = (v1,v2,v3)=>{
    return v1+v2+v3
}

let valores = [1,5,4]

console.log(soma(...valores)) */

/* Spread no HMTL */

let objs = document.getElementsByTagName("div")
let objs2 = [...document.getElementsByTagName("div")]

objs2.forEach(element => {
    element.innerHTML = 'curso js'
});

console.log(objs)
console.log(objs2)