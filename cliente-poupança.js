function Cliente(nome, cpf, email, saldo){
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo
    
    this.depositar = function(valor){
        this.saldo += valor;    
    }

}

function ClientePoupança(nome, cpf, email, saldo, saldoPoup){
    Cliente.call(this, nome, cpf, email, saldo);
    this.saldoPoup = saldoPoup;
}

ClientePoupança.prototype.depositaPoup = function(valor){
    this.saldoPoup += valor;
}
const daniel = new ClientePoupança("Daniel", "1232312123123", "email@gmail.com", 100, 500);
daniel.depositaPoup(1000);
console.log(daniel)
