import { FaMinus } from "react-icons/fa6";

const jogos = [
  {
    nome: "Minecraft",
    instalado: "sim",
    image:
      "https://play-lh.googleusercontent.com/VSwHQjcAttxsLE47RuS4PqpC4LT7lCoSjE7Hx5AW_yCxtDvcnsHHvm5CTuL5BPN-uRTP",
  },
  {
    nome: "The Witcher 3: Wild Hunt",
    instalado: "nao",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202211/0711/kh4MUIuMmHlktOHar3lVl6rY.png",
  },
  {
    nome: "Red Dead Redemption 2",
    instalado: "nao",
    image:
      "https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png",
  },
  {
    nome: "God of War",
    instalado: "sim",
    image:
      "https://img.elo7.com.br/product/zoom/1E93A2E/big-poster-gamer-god-of-war-tamanho-90x-0-cm-lo015-decoracao-nerd.jpg",
  },
  {
    nome: "Fortnite",
    instalado: "sim",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Fortnite_F_lettermark_logo.png",
  },
  {
    nome: "League of Legends",
    instalado: "sim",
    image:
      "https://pentagram-production.imgix.net/cc7fa9e7-bf44-4438-a132-6df2b9664660/EMO_LOL_02.jpg?rect=0%2C0%2C1440%2C1512&w=640&crop=1&fm=jpg&q=70&auto=format&fit=crop&h=672",
  },
  {
    nome: "Counter-Strike 2",
    instalado: "sim",
    image:
      "https://sm.ign.com/ign_br/cover/c/counter-st/counter-strike-2_ft8w.jpg",
  },
  {
    nome: "FIFA 22",
    instalado: "nao",
    image:
      "https://s2-ge.glbimg.com/yCJBIZkVQF69YBZ3sceVu39GS9w=/463x0:1619x1141/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/s/x/qUnJOGTgADPKf1O01v7A/fifa-22-logomarca.png",
  },
  {
    nome: "Call of Duty: Warzone",
    instalado: "sim",
    image:
      "https://sm.ign.com/ign_br/cover/c/call-of-du/call-of-duty-warzone_d7sy.jpg",
  },
  {
    nome: "Among Us",
    instalado: "nao",
    image: "https://sm.ign.com/ign_br/cover/a/among-us/among-us_8kks.jpg",
  },
  {
    nome: "Cyberpunk 2077",
    instalado: "sim",
    image:
      "https://upload.wikimedia.org/wikipedia/pt/f/f7/Cyberpunk_2077_capa.png",
  },
  {
    nome: "Valorant",
    instalado: "sim",
    image:
      "https://img.myloview.com.br/posters/valorant-game-logo-icon-vector-eps-10-gaming-streamer-700-223530158.jpg",
  },
  {
    nome: "Rocket League",
    instalado: "sim",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Rocket_League_coverart.jpg/600px-Rocket_League_coverart.jpg",
  },
  {
    nome: "Genshin Impact",
    instalado: "nao",
    image:
      "https://cdn2.steamgriddb.com/icon/ffbab8235ddc5c0290ecd6ceccc0a61a.png",
  },
  {
    nome: "Assassin's Creed Valhalla",
    instalado: "nao",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202006/1520/EDtkdijFRwbmGKk1G9lrDoEF.png",
  },
  {
    nome: "Death Stranding",
    instalado: "sim",
    image:
      "https://cdn1.epicgames.com/offer/0a9e3c5ab6684506bd624a849ca0cf39/EGS_DeathStrandingDirectorsCut_KOJIMAPRODUCTIONS_S4_1200x1600-5f99e16507795f9b497716b470cfd876",
  },
  {
    nome: "Hades",
    instalado: "sim",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202104/0517/9AcM3vy5t77zPiJyKHwRfnNT.png",
  },
  {
    nome: "Resident Evil Village",
    instalado: "sim",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202207/0706/D8YACd9U8RAcdtOVpXeXDpzg.png",
  },
  {
    nome: "Monster Hunter: World",
    instalado: "sim",
    image:
      "https://image.api.playstation.com/vulcan/img/cfn/11307RW7B5mvRMeOG-1pM9RnGdpRQVQ2iXinFe9755wHVXH0-mRqwizRWZQK8wMHat3XhtITgBGvRuT7JLJkkZenNxUerkoj.png",
  },
  {
    nome: "Final Fantasy VII Remake",
    instalado: "sim",
    image:
      "https://upload.wikimedia.org/wikipedia/pt/0/09/Final_Fantasy_VII_Remake_capa.png",
  },
  {
    nome: "Ratchet & Clank: Rift Apart",
    instalado: "sim",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202101/2921/OaihN9qh0zhrONi8M6x7Pexy.jpg",
  },
  {
    nome: "The Last of Us Part II",
    instalado: "nao",
    image:
      "https://image.api.playstation.com/vulcan/img/rnd/202010/2618/Y02ljdBodKFBiziorYgqftLE.png",
  },
  {
    nome: "Hitman 3",
    instalado: "nao",
    image: "https://upload.wikimedia.org/wikipedia/pt/3/3e/Hitman_3_capa.png",
  },
  {
    nome: "Demon's Souls",
    instalado: "nao",
    image:
      "https://image.api.playstation.com/vulcan/img/rnd/202011/1717/GemRaOZaCMhGxQ9dRhnQQyT5.png",
  },
  {
    nome: "Marvel's Spider-Man: Miles Morales",
    instalado: "nao",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202008/1020/T45iRN1bhiWcJUzST6UFGBvO.png",
  },
  {
    nome: "Sekiro: Shadows Die Twice",
    instalado: "nao",
    image:
      "https://upload.wikimedia.org/wikipedia/pt/7/7b/Sekiro_Shadows_Die_Twice_capa.png",
  },
  {
    nome: "Ghost of Tsushima",
    instalado: "nao",
    image:
      "https://upload.wikimedia.org/wikipedia/pt/d/dc/Ghost_of_Tsushima_capa.png",
  },
  {
    nome: "Control",
    instalado: "sim",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202008/2111/kZuu7RcHultdoVUuGsReuGcq.png",
  },
  {
    nome: "Disco Elysium",
    instalado: "nao",
    image:
      "https://cdn1.epicgames.com/ff52981b1d9947978153c7a7f8bc6d90/offer/EGS_DiscoElysiumTheFinalCut_ZAUM_S6-1200x1600-486d4da970eede7364b9650d63900bad.jpg",
  },
  {
    nome: "Outer Wilds",
    instalado: "nao",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202208/1623/Zofebh60Ue7Zt5sC10UAtU3D.png",
  },
  {
    nome: "No Man's Sky",
    instalado: "nao",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202308/2413/5c214b6568870e2f036270f0e8528048563f9a9929d138de.png",
  },
];

const jogosInstalados = jogos.filter((jogo) => jogo.instalado === "sim");

export function Jogos() {
  return (
    <div className="container">
      <span className="container--title">
        <FaMinus /> TODOS
        <p>
          ({jogosInstalados.length}/{jogos.length})
        </p>
      </span>
      <ul className="container__jogos">
        {jogos.map((jogo) => (
          <li className="container__jogos--lista" key={jogo.nome}>
            <img className="container__jogos--imagem" src={jogo.image} alt="" />
            <p
              style={{
                color: jogo.instalado === "sim" ? "#ffffff" : "#aaaaaa",
              }}
              className="container__jogos--nome"
            >
              {jogo.nome}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
