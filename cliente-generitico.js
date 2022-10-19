function Cliente(nome, cpf, email, saldo){
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo
    
    this.depositar = function(valor){
        this.saldo += valor;    
    }

}


const daniel = new Cliente("Daniel", "1232312123123", "email@gmail.com", 100);
daniel.depositar(500);

console.log(daniel);