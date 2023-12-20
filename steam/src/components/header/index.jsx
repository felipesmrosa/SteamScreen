import { VscMegaphone } from "react-icons/vsc";
import { IoIosNotifications } from "react-icons/io";
import { FaWindowMinimize, FaWindowMaximize } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";

export function Cabecalho() {
  return (
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
          <li>
            <VscMegaphone />
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
          <li>
            <FaWindowMinimize />
          </li>
          <li>
            <FaWindowMaximize />
          </li>
          <li>
            <MdOutlineClose />
          </li>
        </ul>
      </div>
    </div>
  );
}
