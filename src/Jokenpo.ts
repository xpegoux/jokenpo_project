const print = require('readline-sync');

export class Jokenpo {
    private escolha: number;
    private empate: number;
    private vitoria: number;
    private derrota: number;

    constructor(){
        this.escolha = 0;
        this.empate = 0;
        this.vitoria = 0;
        this.derrota = 0;
        
    }

    private menu() {
        console.log("=======Escolha a Opção=======");
        console.log("|| [1] - Pedra             ||");
        console.log("|| [2] - Papel             ||");
        console.log("|| [3] - Tesoura           ||");
        console.log("|| [4] - Placar            ||");
        console.log("|| [5] - Como jogar?       ||");
        console.log("|| [0] - Sair              ||");
        console.log("=============================");
    }

    public jogar() {
        do {
            this.menu();
            this.opcoes();
            var continuar: number = print.question("\nDeseja sair?\n[0] = Sim\n[1] = Nao\n-> ");
            if (continuar != 0 && continuar != 1) {
                console.error("Opção inválida, tente novamente!");
            } else if (continuar == 1) {
                console.clear();
            }
        } while(continuar != 0);
    }

    private tutorial() {
        console.log("                                      ==========");
        console.log("                                      *TUTORIAL*");
        console.log("                                      ==========");
        console.log("----------------------------------------------------------------------------------------")
        console.log(`                                                                                         |
    [*] Jogo fácil de jogar e divertido, afinal quem ganha? A pessoa ou a máquina?       |
    [*] Para jogar é bem simples, apenas escolha 1 para pedra, 2 para papel ou 3 para    |
    tesoura, e a máquina irá fazer a escolha dela randomicamente, quem vencer venceu! :) |
                                                                                         |`)
        console.log("----------------------------------------------------------------------------------------")
    }

    private opcoes() {
        let decision: number;
        decision = print.questionInt("-> ");
        this.escolha = decision;
        switch (this.escolha) {
            case 1:
                this.vencedor();
                break;
            case 2:
                this.vencedor();
                break;
            case 3:
                this.vencedor();
                break;
            case 4:                
                this.historico();
                break;
            case 5:
                this.tutorial();                
            case 0:
                break;
        }
    }

    private bot(): string {
        var nomes = ['', "Pedra", "Papel", "Tesoura"];
        var nome = nomes[Math.ceil(Math.random() * (nomes.length - 1))];
        return nome;
    }

    private vencedor() {
        //1 -> Pedra | 2 -> Papel | 3 -> Tesoura
        let bot = this.bot();
        //Empates
        if (this.escolha === 1 && bot === "Pedra" || this.escolha === 2 && bot === "Papel" || this.escolha === 3 && bot === "Tesoura") {
            console.log(`BOT -> ${bot} (Empate)`);
            this.empate++;
        //Bot wins
        } else if (this.escolha === 1 && bot === "Papel" || this.escolha === 2 && bot === "Tesoura" || this.escolha === 3 && bot === "Pedra") {
            console.log(`BOT -> ${bot} (Derrota)`);
            this.derrota++;
        //Player wins
        } else if (this.escolha === 1 && bot === "Tesoura" || this.escolha === 2 && bot === "Pedra" || this.escolha === 3 && bot === "Papel") {
            console.log(`BOT -> ${bot} (Vitória)`);
            this.vitoria++;
        } else {
            throw new Error("Você digitou uma opção inválida!");
        }
    }

    private historico() {
        console.log("=====================")
        console.log("Vitorias....: " + this.vitoria);
        console.log("Empates.....: " + this.empate);
        console.log("Derrotas....: " + this.derrota);
        console.log("=====================")
    }
}
