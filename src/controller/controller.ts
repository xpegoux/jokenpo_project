import { Model } from "../model/model";
import { View } from "../view/view";

export class Controller {
    //importando camadas para controle de fluxo
    view: View = new View;
    model: Model = new Model;

    //método de iniciar o menu principal
    public jogar() {
        let opcao: number = this.view.jogar();
        while (opcao != 0) {
            while (opcao < 0 || opcao > 6) { //verificação de erros caso opções sejam digitadas incorretamente
                console.clear();
                console.log("\n[!] Opção inválida [!]");
                opcao = this.view.jogar();
                console.clear();
            }
            this.resultadoDoMenu(opcao);

            opcao = this.view.jogar();
        }
    }

    //casar com o mostrarResultado do view e apresentar resultados
    resultadoDoMenu(opcao: number) {
        let resultado:number = this.model.resultado(opcao);

        if (resultado == this.model.empate) { //resultado de empates
            return this.view.mostrarResultado(resultado);

        } else if (resultado == this.model.derrota) { //resultado de derrotas
            return this.view.mostrarResultado(resultado);

        } else if (resultado == this.model.vitoria) { //resultado de vitorias
            return this.view.mostrarResultado(resultado);

        } else if (opcao == 4) { //placar atual
            return this.view.placar(this.model.placarVitoria, this.model.placarEmpate, this.model.placarDerrota);

        } else if (opcao == 5) { //tutorial do jogo
            this.view.tutorial();
        }
    }
}