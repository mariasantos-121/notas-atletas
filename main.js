class CalculadoraNotas {
    constructor(atletas){
        this.atletas = atletas
    }

    obterNotasValidas (){
    let resultado = []
    for (let i = 0; i < this.atletas.length; i++){
       let notasValidas =  this.atletas[i].notas.sort().slice(1,4)
       resultado.push(notasValidas)
    }
    return resultado
}

    obterSomaNotas(){
        let notas = this.obterNotasValidas(this.atletas)
        let somas = []

        for (let i = 0; i < notas.length; i++){
        let soma = 0
            for(let j = 0; j < notas[i].length; j++){
                soma += notas[i][j]
            }
            somas.push(soma)
        }
        return somas
    }

    obterMediaAtletas(){
        let notasAtletas = this.obterNotasValidas(this.atletas)
        let somaAtletas = this.obterSomaNotas(this.atletas)
        let resultado = []

        for(let i = 0; i < this.atletas.length; i++){
            let resposta = `${this.atletas[i].nome}: ${somaAtletas[i]/notasAtletas[i].length}`
            resultado.push(resposta)
        }
        return resultado.join(", \n")
        
    }
}


let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

let calculadora = new CalculadoraNotas(atletas)

console.log(calculadora.obterNotasValidas())
console.log(calculadora.obterSomaNotas())
console.log(calculadora.obterMediaAtletas())
