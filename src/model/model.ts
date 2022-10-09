export class Model {

    empate: number;
    vitoria: number;
    derrota: number;
    placarEmpate: number;
    placarVitoria: number;
    placarDerrota: number;
    constructor(){        
        this.empate = 1;
        this.derrota = 2;
        this.vitoria = 3;

        //receber contador para formação do placar/historico
        this.placarEmpate = 0;
        this.placarVitoria = 0;
        this.placarDerrota = 0;
    }    

    bot(): string {
        var nomes = ['', "Pedra", "Papel", "Tesoura"];
        var nome = nomes[Math.ceil(Math.random() * (nomes.length - 1))];
        return nome;
    }

    resultado(escolha: number): number {
        //1 -> Pedra | 2 -> Papel | 3 -> Tesoura
        let bot = this.bot();
        //Empates
        if (escolha === 1 && bot === "Pedra" || escolha === 2 && bot === "Papel" || escolha === 3 && bot === "Tesoura") {
            console.log(`BOT -> ${bot}`);
            this.placarEmpate++ //contagem do placar
            return this.empate;
        //Bot wins
        } else if (escolha === 1 && bot === "Papel" || escolha === 2 && bot === "Tesoura" || escolha === 3 && bot === "Pedra") {
            console.log(`BOT -> ${bot}`);
            this.placarDerrota++ //contagem do placar
            return this.derrota;
        //Player wins
        } else if (escolha === 1 && bot === "Tesoura" || escolha === 2 && bot === "Pedra" || escolha === 3 && bot === "Papel") {
            console.log(`BOT -> ${bot}`);
            this.placarVitoria++ //contagem do placar
            return this.vitoria;
        } else {
            return 0 //tratamento de erro posteriormente
        }
    }
}
