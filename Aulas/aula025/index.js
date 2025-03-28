var amigo = {
    nome: 'José', 
    genero: 'Maquina de Lavar', 
    peso: 85.4,
    engordar(p=0){
        this.peso += p
    }
}
amigo.engordar(20000)
console.log(`${amigo.nome} pesa ${amigo.peso} Kg `)