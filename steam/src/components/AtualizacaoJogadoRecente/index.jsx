import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { JogosRecentes } from "../JogosRecentes";

const atualizacoes = [
  {
    modificacao: "Ontem",
    imagem:
      "https://cdn.cloudflare.steamstatic.com/store/library_update/social_media_image.jpg",
    descricao: "Nova Biblioteca Steam - Já disponível",
    logo: "https://gartic.com.br/imgs/mural/sn/snoopybits/steam-logo.png",
    autor: "Steam Blog",
  },
  {
    modificacao: "esta semana",
    imagem:
      "https://cdn1.epicgames.com/spt-assets/14eb3477a6084940b49de5aa73c60f98/payday-2-jhfaq.jpg",
    descricao: "Winds of Change",
    logo: "https://cdn2.steamgriddb.com/icon_thumb/9e93087b5c0158b50884f9c44a535944.png",
    autor: "PAYDAY 2",
  },
  {
    modificacao: "esta semana",
    imagem: "https://i.ytimg.com/vi/FD8Iw684OzE/maxresdefault.jpg",
    descricao: 'DLX Mission "Anchorhead Raid" Now Available! ',
    logo: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a98cff5d-a612-49d8-a0db-175994384b20/dczt0ou-795ccad4-61c4-4fcd-b6a1-7e015bf2776f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E5OGNmZjVkLWE2MTItNDlkOC1hMGRiLTE3NTk5NDM4NGIyMFwvZGN6dDBvdS03OTVjY2FkNC02MWM0LTRmY2QtYjZhMS03ZTAxNWJmMjc3NmYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.7CqgZ1NaNAVvm55KqPDW7NzuutFb4pH6jZMN0IEjc8U",
    autor: "ACE COMBAT 7: SKIES UNKNOWN",
  },
  {
    modificacao: "há 2 semanas",
    imagem:
      "https://www.frostpunkgame.com/wp-content/uploads/2019/10/console-pre-frost-thumbnail.jpg",
    descricao: "Frostpunk: Console Edition is here!",
    logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple115/v4/14/5d/e1/145de12b-7f68-ba7a-8bbe-04095ebe8767/AppIcon-0-0-85-220-0-0-0-0-4-0-0-0-2x-sRGB-0-0-0-0-0.png/1200x630bb.png",
    autor: "Frostpunk",
  },
];

export function JogadoRecente() {
  return (
    <div className="containerJogos">
      <div className="containerJogos__atualizacoes">
        <span className="containerJogos__atualizacoes--header">
          <h3>ATUALIZAÇÕES PARA VOCÊ</h3>
          <div className="containerJogos__atualizacoes--linha"></div>
          <IoIosArrowBack className="containerJogos__atualizacoes--iconeApagado" />
          <IoIosArrowForward className="containerJogos__atualizacoes--iconeAtivo" />
        </span>
        <div className="containerJogos__atualizacoes__map">
          {atualizacoes.map((atualizacao) => (
            <div className="containerJogos__atualizacoes__map__conteudo">
              <p className="containerJogos__atualizacoes__map__conteudo--modificacao">
                {atualizacao.modificacao}
              </p>
              <img
                className="containerJogos__atualizacoes__map__conteudo--imagem"
                src={atualizacao.imagem}
                alt=""
              />
              <p className="containerJogos__atualizacoes__map__conteudo--descricao">
                {atualizacao.descricao}
              </p>
              <div className="containerJogos__atualizacoes__map__conteudo--postagem">
                <img
                  className="containerJogos__atualizacoes__map__conteudo--postagem--logo"
                  src={atualizacao.logo}
                  alt=""
                />
                <p className="containerJogos__atualizacoes__map__conteudo--postagem--autor">
                  {atualizacao.autor}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <JogosRecentes />
    </div>
  );
}
