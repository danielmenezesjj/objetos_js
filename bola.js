class Bola{

    constructor(cor){
        this.cor = cor;

    }

    alterarCor(novaCor){
        this.cor = novaCor

    }

    mostrarCor(){
        console.log(this.cor)

    }
}

const b1 = new Bola("azul")

b1.alterarCor("Verde")

b1.mostrarCor();