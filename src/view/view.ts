const print = require('readline-sync');

export class View {

    private menu(): number {
        console.log(" ======Escolha a Opção======");
        console.log("|| [1] - Pedra             ||");
        console.log("|| [2] - Papel             ||");
        console.log("|| [3] - Tesoura           ||");
        console.log("|| [4] - Placar            ||");
        console.log("|| [5] - Como jogar?       ||");
        console.log("|| [0] - Sair              ||");
        console.log(" ===========================");

        let decision: number;
        decision = print.questionInt("-> ");
        return decision;        
    }

    public jogar(): number {
        return this.menu();
    }

    public fim(): void {
        console.log("Jogo finalizado!");
    }

    public mostrarResultado(opcao: number | undefined) {
        if (opcao == 1) {
            console.log("Empate :O");
        } else if (opcao == 2) {
            console.log("Derrota :(");
        } else if (opcao == 3) {
            console.log("Vitória :D");
        }
    }

    public tutorial() {
        console.log("                                      ==========");
        console.log("                                      *TUTORIAL*");
        console.log("                                      ==========");
        console.log(" ---------------------------------------------------------------------------------------")
        console.log(`|                                                                                        |
|   [*] Jogo fácil de jogar e divertido, afinal quem ganha? A pessoa ou a máquina?       |
|   [*] Para jogar é bem simples, apenas escolha 1 para pedra, 2 para papel ou 3 para    |
| tesoura, e a máquina irá fazer a escolha dela randomicamente, quem vencer venceu! :)   |
|                                                                                        |`)
        console.log(" ---------------------------------------------------------------------------------------")
    }

    public placar(vitorias: number, empates: number, derrotas: number) {
        console.log(" =================== ")
        console.log("|| Vitorias....: " + vitorias + " ||");
        console.log("|| Empates.....: " + empates + " ||");
        console.log("|| Derrotas....: " + derrotas + " ||");
        console.log(" =================== ")
    }
}
