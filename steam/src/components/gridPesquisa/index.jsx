import { MdHome } from "react-icons/md";
import { SiWindows } from "react-icons/si";
import { IoSearch, IoPlayCircleOutline } from "react-icons/io5";
import { FaFilter } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { PiTimer } from "react-icons/pi";

export function PesquisaEFiltro() {
  return (
    <>
      <div className="grid__menuDeJogos__nav">
        <span className="grid__menuDeJogos__nav--home">
          <MdHome />
          PÁGINA INICIAL
        </span>
        <SiWindows />
      </div>

      <div className="grid__menuDeJogos__pesquisa">
        <IoSearch />
        <input className="grid__menuDeJogos__pesquisa--input" type="text" />
        <FaFilter className="grid__menuDeJogos__pesquisa--input--SVG" />
      </div>

      <div className="grid__menuDeJogos__select">
        <div className="grid__menuDeJogos__select--jogos">
          <p className="grid__menuDeJogos__select--jogos--span">
            JOGOS <IoIosArrowDown />
          </p>
          <PiTimer />
          <IoPlayCircleOutline />
        </div>
      </div>
    </>
  );
}
