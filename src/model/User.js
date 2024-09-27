module.exports = class User {
    constructor(nome, cpf, email, senha){
        this.nome
        this.cpf
        this.email
        this.senha
    }

    toJSON() {
        return {
            nome: this.nome,
            cpf: this.cpf,
            email: this.email,
            senha: this.senha,
        };
    }
}