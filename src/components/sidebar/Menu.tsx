import { MdLabel } from "react-icons/md";
import { PiSquaresFourLight } from "react-icons/pi";
import { SiUnrealengine } from "react-icons/si";

const Menu = (): JSX.Element => {
  return (
    <ul tabIndex={0} className="menu menu-lg dropdown-content bg-base-100 rounded-box z-[1] w-[16rem] p-2">
      <li>
        <a>{<MdLabel style={{ rotate: "-45deg" }} />} Store</a>
      </li>
      <li>
        <a>{<PiSquaresFourLight />} Library</a>
      </li>
      <li>
        <a>{<SiUnrealengine />} Unreal Engine</a>
      </li>
    </ul>
  );
};

export default Menu;
