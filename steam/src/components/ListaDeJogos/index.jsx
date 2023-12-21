import { Jogos } from "../jogos";
import { PesquisaEFiltro } from "../gridPesquisa";
import { JogadoRecente } from "../AtualizacaoJogadoRecente";

export function ListaDeJogos() {
  return (
    <div class="grid">
      <div class="grid__menuDeJogos">
        <PesquisaEFiltro />
        <Jogos />
      </div>
      <JogadoRecente />
    </div>
  );
}
