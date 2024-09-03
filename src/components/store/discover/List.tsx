import { IoIosArrowForward } from "react-icons/io";

const List = ({divider}: {divider?: boolean}): JSX.Element => {
  return (
    <div className="flex mt-10">
      <div>
        <h3 className="text-2xl font-bold flex items-center gap-3 hover:gap-5 transition-[gap] duration-500 cursor-pointer">Category {<IoIosArrowForward />}</h3>
        <ul className="menu menu-lg dropdown-content rounded-box z-[1] w-[16rem] mt-5">
          <li>
            <div className="flex gap-3">
              <div className="w-10 h-14 rounded-md bg-slate-800">
                <img className="w-full h-full rounded-md object-cover" src="https://image.api.playstation.com/vulcan/ap/rnd/202306/3020/0c05ae77009875cbfd368d348c2c4be3d04f7bdcc5e6ce5d.jpg" alt="tes" />
              </div>
              <p>Title</p>
            </div>
          </li>
          <li>
            <div className="flex gap-3">
              <div className="w-10 h-14 rounded-md bg-slate-800">
                <img className="w-full h-full rounded-md object-cover" src="https://image.api.playstation.com/vulcan/ap/rnd/202306/3020/0c05ae77009875cbfd368d348c2c4be3d04f7bdcc5e6ce5d.jpg" alt="tes" />
              </div>
              <p>Title</p>
            </div>
          </li>
          <li>
            <div className="flex gap-3">
              <div className="w-10 h-14 rounded-md bg-slate-800">
                <img className="w-full h-full rounded-md object-cover" src="https://image.api.playstation.com/vulcan/ap/rnd/202306/3020/0c05ae77009875cbfd368d348c2c4be3d04f7bdcc5e6ce5d.jpg" alt="tes" />
              </div>
              <p>Title</p>
            </div>
          </li>
          <li>
            <div className="flex gap-3">
              <div className="w-10 h-14 rounded-md bg-slate-800">
                <img className="w-full h-full rounded-md object-cover" src="https://image.api.playstation.com/vulcan/ap/rnd/202306/3020/0c05ae77009875cbfd368d348c2c4be3d04f7bdcc5e6ce5d.jpg" alt="tes" />
              </div>
              <p>Title</p>
            </div>
          </li>
          <li>
            <div className="flex gap-3">
              <div className="w-10 h-14 rounded-md bg-slate-800">
                <img className="w-full h-full rounded-md object-cover" src="https://image.api.playstation.com/vulcan/ap/rnd/202306/3020/0c05ae77009875cbfd368d348c2c4be3d04f7bdcc5e6ce5d.jpg" alt="tes" />
              </div>
              <p>Title</p>
            </div>
          </li>
        </ul>
      </div>
      {divider ? <div className="divider lg:divider-horizontal"></div> : null}
    </div>
  );
};

export default List;
