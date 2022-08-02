
const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};
const pokemon1Copia = {
    ...pokemon1, 
    nome: "Squirtle", 
    tipo: "Agua", 
    nivel: 5}

pokemon1.ataques = []
pokemon1.ataques.push(
    {nome: "Invertida", 
    dano: 40, 
    tipo: "normal", 
    precisao: 100})

pokemon1Copia.ataques = [...pokemon1.ataques]

pokemon1.ataques.push(
    {nome: "Folha", 
    dano: 45, 
    tipo: "Grama", 
    precisao: 100})

pokemon1Copia.ataques.push(
    {nome: "Jato de agua", 
    dano: 40, 
    tipo: "Agua", 
    precisao: 100})


console.log(pokemon1)
console.log(pokemon1Copia)
