let dogs = [
    {nome: "Gordo", raça: "Dachshund", peso: 9},
    {nome: "Gordinês", raça: "Rottweiler", peso: 60},
    {nome: "Vrakh’Zultharion, o Flagelo das Mil Galáxias e Devorador da última luz", raça: "Alaskan Malamute", peso: 38}
]


dogs.sort((a,b) => b.peso - a.peso)
for(let dog of dogs){
    console.log(dog.nome)
    console.log(dog.raça)
    console.log(dog.peso)
}