import { CiSquarePlus } from "react-icons/ci";
import { GoPlusCircle } from "react-icons/go";

export function RodapeDonwload() {
  return (
    <footer className="rodape">
      <div className="rodape__adicionar">
        <CiSquarePlus className="rodape__adicionar--squarePlus" />
        <p>ADICIONAR JOGO</p>
      </div>
      <div className="rodape__downloads">
        <p>DOWNLOADS</p>
        <p className="rodape__downloads--gerenciar">Gerenciar</p>
      </div>
      <div className="rodape__amigos">
        <span className="rodape__amigos--break">
          <p>AMIGOS E</p>
          <p>CONVERSAS</p>
        </span>
        <GoPlusCircle className="rodape__amigos--icone" />
      </div>
    </footer>
  );
}
