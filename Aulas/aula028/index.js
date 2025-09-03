/* FOR IN e FOR OF */

let objt = document.getElementsByTagName("div")
let num = [10, 20, 30, 40, 50]

for (n of objt){
    console.log(n.innerHTML="Linux")
}

for (n in objt){
    console.log(objt[n].innerHTML="linux")
}  

/* for of */
/* for (n of num){
    console.log(n)
} */

/* for in */
/* for (n in num){
    console.log(n)
}  */

/* for normal */
/* for(let i = 0; i <num.length; i++){
    console.log(num[i])
} */