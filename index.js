class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

        atacar() {
    let ataque
        switch (this.tipo){
            case "mago":
                    ataque = "magia";
                break;
            case "guerreiro":
                    ataque = "espada";
                break;
            case "monge":
                    ataque = "artes marciais";
                break;
            case "ninja":
                    ataque = "shuriken";
    			break;
            
        }

        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`)
    }
    
}
let personagem
personagem = new heroi("Gabriel",18,"monge")
personagem.atacar()