function fibonacci (num){

let temporario = [0,1]
let soma = 0
let atual = 1
let  proximo= 0

        for (let i = 3; i <=num; i++) {

            soma = atual + proximo

            proximo = atual

            atual = soma
            temporario.push(atual)   
        }
        return temporario
}
console.log(fibonacci(8));
