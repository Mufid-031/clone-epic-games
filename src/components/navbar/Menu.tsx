const Menu = (): JSX.Element => {
  return (
    <ul className="flex gap-5 ml-5 text-lg">
      <li className="cursor-pointer">
        <a className="text-slate-400 hover:text-slate-200">Discover</a>
      </li>
      <li className="cursor-pointer">
        <a className="text-slate-400 hover:text-slate-200">Browse</a>
      </li>
      <li className="cursor-pointer">
        <a className="text-slate-400 hover:text-slate-200">News</a>
      </li>
    </ul>
  );
};

export default Menu;
