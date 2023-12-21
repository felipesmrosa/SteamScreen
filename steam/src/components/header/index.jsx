import { BsFillMegaphoneFill } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import {
  FaWindowMinimize,
  FaWindowMaximize,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";

const handleFullScreen = () => {
  const doc = window.document;
  const docEl = doc.documentElement;

  if (docEl.requestFullscreen) {
    docEl.requestFullscreen();
  } else if (docEl.mozRequestFullScreen) {
    docEl.mozRequestFullScreen();
  } else if (docEl.webkitRequestFullScreen) {
    docEl.webkitRequestFullScreen();
  } else if (docEl.msRequestFullscreen) {
    docEl.msRequestFullscreen();
  }
};
const handleExitFullScreen = () => {
  const doc = window.document;
  if (doc.exitFullscreen) {
    doc.exitFullscreen();
  } else if (doc.mozCancelFullScreen) {
    doc.mozCancelFullScreen();
  } else if (doc.webkitExitFullscreen) {
    doc.webkitExitFullscreen();
  } else if (doc.msExitFullscreen) {
    doc.msExitFullscreen();
  }
};

export function Cabecalho() {
  return (
    <>
      <div className="menu">
        <ul className="menu__lista">
          <li className="menu__lista--item">Steam</li>
          <li className="menu__lista--item">Exibir</li>
          <li className="menu__lista--item">Amigos</li>
          <li className="menu__lista--item">Jogos</li>
          <li className="menu__lista--item">Ajuda</li>
        </ul>
        <div className="menu__biblioteca">
          <ul className="menu__biblioteca--lista">
            <li className="menu__biblioteca--lista--icone">
              <BsFillMegaphoneFill />
            </li>
            <li>
              <IoIosNotifications />
            </li>
            <li className="menu__biblioteca--lista--perfil">
              <img src="../../src/images/eu.jpg" alt="" />
              <p>
                FelipeMiranda
                <FaAngleDown />
              </p>
            </li>
            <li onClick={handleExitFullScreen}>
              <FaWindowMinimize />
            </li>
            <li onClick={handleFullScreen}>
              <FaWindowMaximize />
            </li>
            <li>
              <MdOutlineClose />
            </li>
          </ul>
        </div>
      </div>
      <div className="menu__embaixo">
        <span className="menu__embaixo--setas">
          <FaArrowLeft />
          <FaArrowRight />
        </span>
        <div className="menu__embaixo--nav">
          <p>LOJA</p>
          <p className="menu__embaixo--nav--destaque">BIBLIOTECA</p>
          <p>COMUNIDADE</p>
          <p>FELIPEMIRANDA</p>
        </div>
      </div>
    </>
  );
}
