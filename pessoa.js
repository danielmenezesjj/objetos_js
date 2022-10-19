/*
Atributos: nome, idade, peso e altura
Métodos: Envelhercer, engordar, emagrecer, crescer. Obs: Por padrão, 
a cada ano que nossa pessoa envelhece, sendo a idade dela menor que 21 anos, ela deve crescer 0,5 cm.
*/


class Pessoa{
    constructor(nome, altura, peso, idade){
        this.nome = nome;
        this.altura = altura;
        this.peso = peso;
        this.idade = idade;
    }

    engordar(novoPeso){
        this.peso += novoPeso;
    }
    emagrecer(pesoNovo){
        this.peso -= pesoNovo;
    }
    crescer(novaAltura){
        this.altura += novaAltura;

    }
    envelhercer(novaIdade){
        this.idade += novaIdade
        if(this.idade <= 21){
            this.altura += 0.5;
        }

    }
    

}

const p1 = new Pessoa("daniel", 1.75, 87, 11)



p1.envelhercer(1)

p1.emagrecer(5)

console.log(p1);