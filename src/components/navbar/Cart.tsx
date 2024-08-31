const Cart = (): JSX.Element => {
  return (
    <ul className="flex gap-5">
      <li className="cursor-pointer">
        <a className="text-slate-400 hover:text-slate-200">Wishlist</a>
      </li>
      <li className="cursor-pointer">
        <a className="text-slate-400 hover:text-slate-200">Cart</a>
      </li>
    </ul>
  );
};

export default Cart;
