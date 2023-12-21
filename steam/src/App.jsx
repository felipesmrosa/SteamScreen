import { RodapeDonwload } from "./components/Footer/index.jsx";
import { ListaDeJogos } from "./components/ListaDeJogos/index.jsx";
import { Cabecalho } from "./components/header/index.jsx";

import "./styles/main.scss";

export function App() {
  return (
    <>
      <Cabecalho />
      <ListaDeJogos />
      <RodapeDonwload />
    </>
  );
}
