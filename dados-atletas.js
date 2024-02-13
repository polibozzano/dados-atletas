class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

calculaCategoria() {
/*Infantil: 9 a 11 anos
Juvenil: 12 e 13 anos
Intermediário: 14 e 15 anos
Adulto: 16 a 30 anos
Sem categoria: demais idades*/

if(this.idade >= 9 && this.idade <= 11){
    return "Infantil";
} else if(this.idade >= 12 && this.idade <= 13){
    return "Juvenil";
} else if(this.idade >= 14 && this.idade <= 15){
    return "Intermediário";
} else if(this.idade >= 16 && this.idade <= 30){
    return "Adulto";
} else {
    return "Sem Categoria";
}
}

calculaIMC(){
//Fórmula: imc = peso / (altura x altura)
var imc = this.peso / (this.altura * this.altura);
return imc;
}

calculaMediaValida(){
    function calculaMedia(notas){
        notas = notas.sort(function(a,b){
            return a - b; //Organiza as notas em ordem crescente numérica
        });

        let notaDosAtletas = notas.slice(1,4); //Elimina a nota de menor e maior valor

        let soma = 0;
        notaDosAtletas.forEach(function(nota){
            soma += nota; //(soma = soma + nota)
        });

        let mediaDasNotas = soma / notaDosAtletas.length; //Faz a média das notas com a quantidade de notas disponíveis
        return mediaDasNotas;
    }
    return calculaMedia(this.notas); //Retorna o cálculo feito
}
obtemNomeAtleta(){
    return this.nome;
}
obtemIdadeAtleta(){
    return this.idade;
}
obtemPesoAtleta(){
    return this.peso;
}
obtemAlturaAtleta(){
    return this.altura;
}
obtemNotasAtleta(){
    return this.notas.join(", ");
}
obtemCategoria(){
    return `Categoria: ${this.calculaCategoria()}`;
}
obtemIMC(){
    return `IMC: ${this.calculaIMC()}`;
}
obtemMediaValida(){
//Utilizar a metodologia abordada no Projeto de Certificação 1
return `Média Válida: ${this.calculaMediaValida()}`;
}
}

const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

console.log("- Atleta BIO -")
console.log("Nome: ", atleta.obtemNomeAtleta());
console.log("Idade: ", atleta.obtemIdadeAtleta());
console.log("Peso: ", atleta.obtemPesoAtleta());
console.log("Altura: ", atleta.obtemAlturaAtleta());
console.log("Notas: ", atleta.obtemNotasAtleta());
console.log(atleta.obtemCategoria());
console.log(atleta.obtemIMC());
console.log(atleta.obtemMediaValida());




