function fat(n){
    var f = 1
    for(var c = n; c > 1; c--) {
        f *= c
    }
    return f
}

console.log(fat(5))