// conhecendo 

let exemplo = 42
console.log(exemplo)

const obj = {
    aluno: "fernando",
    idade: 12, 
    funcao: "developer",
    hole: "motoAcademy"
}

const a = "12"
let b = 2
function sum(a, b) {return a -(-b)}

const result =sum(a, b)
console.log(result)

// tipos de dados 

const number = 1
const string = "texto"
const booleano = true 
const nulo = null // nao é nada 
const _undefined  = undefined // é menos q nada, não tem tipo, nada nada nada mesmo, ausencia de tudo

const objeto = {
    nome: nulo, 
    idade: _undefined,
    funcaum: (word) => {
        return `olá, ${word} tenho ${objeto.idade} anos e meu nome é: ${objeto.nome? objeto.nome: "não tenho nome ainda :("}`
    } 

}

objeto.idade = 21
console.log(objeto.funcaum('Mundo'))

// definindo variaveis 

// const ->  no geral, não muda a estrutura. Ou seja, não muda os valores internos 
const arr = []
const object2 = {
    
}
object2.nome = 'fernando'
console.log(object2)
arr.push(20)
console.log(arr)

const value = 2;
console.log(value)
// let ->  variável de escopo, se estiver numa função, só pode ser vista numa função
// se criar fora, no escopo do modulo, vai ser acessivel no escopo inteiro 
// se a mesma variavel for definida dentro e fora, os valores serão do escopo atual 
function teste() {
    let var2 = 'teste'
    return var2 
}
const var2 = teste()
console.log(var2)
// var  -> é uma variável global e mutável pode ser declarada em qualquer lugar do código 
// e mesmo assim vai ser acessível em qualquer outro lugar do código 


function teste4() {
    var var5 = 'temporal'
    test3()
}

function test3() {
    var5 = "temporal"
};

teste4();
console.log(var5)



const aluno = "Fernand1o"

// condicionais  
if (aluno == "Fernando"){
    console.log("Fernanado")
} 
else {
    console.log("Fernanandooooo")
}


const numero = 22;

let obj1 = { 
    a: 2,
    b: 3
}
let obj2 = {
    a: 4,
    b: 5
}
if (obj1 == obj2){
    console.log('iguais')
}

if (numero === 22){
    console.log("numero é 22")
}


console.log('' <= null)
if (30 <= numero){
    console.log('eh maior');
} if (30 >= numero){
    console.log('eh menor');
} else {
    console.log('eh igual');
}

const print = (word) => console.log(word)
const exibir = (word) => console.log(word)

print("hello")