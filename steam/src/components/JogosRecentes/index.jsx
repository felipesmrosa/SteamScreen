import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaChevronDown, FaPlay } from "react-icons/fa";

export function JogosRecentes() {
  return (
    <>
      <div className="containerJogos__recentes">
        <h3>
          JOGOS RECENTES
          <FaChevronDown className="containerJogos__recentes--down" />
        </h3>
        <div className="containerJogos__recentes--linha"></div>
        <IoIosArrowBack className="containerJogos__recentes--iconeApagado" />
        <IoIosArrowForward className="containerJogos__recentes--iconeAtivo" />
      </div>
      <p className="containerJogos--setembro">setembro</p>
      <div class="containerJogos__teste">
        <div class="containerJogos__teste__item">
          <img
            className="containerJogos__teste__item--principal"
            src="https://cdn.akamai.steamstatic.com/steam/apps/213670/capsule_616x353.jpg?t=1680013652"
            alt=""
          />
          <div className="containerJogos__teste__item--principal--play">
            <button>
              <FaPlay />
            </button>
            <span>
              <h5>TEMPO DE JOGO</h5>
              <p>Nas últimas 2 semanas: 0min</p>
              <p>Total: 108min</p>
            </span>
          </div>
        </div>
        <div class="containerJogos__teste__item">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/68/Celeste_box_art_cropped.png"
            alt=""
          />
        </div>
        <div class="containerJogos__teste__item">
          <img
            src="https://cdn.originalky.cz/images/0/3301b2b3abe5700c/2/playerunknown-s-battlegrounds-pubg-pc.jpg?hash=261024160"
            alt=""
          />
        </div>
        <div class="containerJogos__teste__item">
          <img
            src="https://i.pinimg.com/1200x/46/6d/cf/466dcf660d8d302b72f4c63d8fc657ae.jpg"
            alt=""
          />
        </div>
        <div class="containerJogos__teste__item">
          <img
            src="https://upload.wikimedia.org/wikipedia/pt/8/80/Grand_Theft_Auto_V_capa.png"
            alt=""
          />
        </div>
        <div class="containerJogos__teste__item">
          <img
            src="https://image.api.playstation.com/vulcan/img/cfn/11307uYG0CXzRuA9aryByTHYrQLFz-HVQ3VVl7aAysxK15HMpqjkAIcC_R5vdfZt52hAXQNHoYhSuoSq_46_MT_tDBcLu49I.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
