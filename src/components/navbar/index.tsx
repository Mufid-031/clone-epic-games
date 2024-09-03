import { IoIosArrowBack } from "react-icons/io";
import { BsPersonFill } from "react-icons/bs";
import Search from "./Search";
import Menu from "./Menu";
import Cart from "./Cart";
import Avatar from "./Avatar";
import { SiEpicgames } from "react-icons/si";

const Navbar = (): JSX.Element => {
  return (
    <nav className="navbar py-4 px-7 bg-[#141414] fixed top-0 right-0 z-20">
      <div className="navbar-start">
        <div className="flex justify-center items-center p-5">
          <a>
            <SiEpicgames size={40} />
          </a>
        </div>
        <div className="ml-[10rem] flex items-center">
          <IoIosArrowBack className="mr-5" />
          <Search />
          <Menu />
        </div>
      </div>
      <div className="navbar-end gap-5">
        <Cart />
        <div className="divider lg:divider-horizontal"></div>
        <Avatar>
          <BsPersonFill className="absolute top-[50%] left-[50%] translate-x-[-80%] translate-y-[-50%]" />
          <BsPersonFill className="absolute top-[50%] left-[50%] translate-x-[-20%] translate-y-[-50%]" />
        </Avatar>
        <Avatar isOnline>M</Avatar>
      </div>
    </nav>
  );
};

export default Navbar;
