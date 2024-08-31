import { BsPersonFill } from "react-icons/bs";
import Search from "./Search";
import Menu from "./Menu";
import Cart from "./Cart";
import Avatar from "./Avatar";

const Navbar = (): JSX.Element => {
  return (
    <nav className="navbar bg-base-100 mt-2">
      <div className="navbar-start">
        <Search />
        <Menu />
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
