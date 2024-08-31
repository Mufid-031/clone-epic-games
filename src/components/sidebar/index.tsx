import Logo from "./Logo";
import Menu from "./Menu";

const Sidebar = (): JSX.Element => {
  return (
    <div className="relative top-0 left-0 bottom-0">
      <div className="fixed left-0 top-0 bottom-0">
        <Logo />
        <Menu />
      </div>
    </div>
  );
};

export default Sidebar;
