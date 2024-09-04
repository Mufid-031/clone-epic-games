import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Filter = ({ title }: { title: string }): JSX.Element => {
  return (
    <section className="mt-5">
      <div className="flex justify-between p-2">
        <h3 className="text-2xl text-white font-bold cursor-pointer flex items-center gap-3 hover:gap-5 transition-[gap] duration-500">
          {title} {<IoIosArrowForward />}
        </h3>
        <div className="flex gap-5 mr-9">
          <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">{<IoIosArrowBack color="#fff" />}</div>
          <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">{<IoIosArrowForward color="#fff" />}</div>
        </div>
      </div>
      <div className="flex gap-5 mt-5 w-full">
        <div className="w-56 h-80 bg-slate-600 rounded-lg"></div>
        <div className="w-56 h-80 bg-slate-600 rounded-lg"></div>
        <div className="w-56 h-80 bg-slate-600 rounded-lg"></div>
        <div className="w-56 h-80 bg-slate-600 rounded-lg"></div>
        <div className="w-56 h-80 bg-slate-600 rounded-lg"></div>
        {/* <div className="w-56 h-80 bg-slate-600 rounded-lg"></div> */}
        {/* <div className="w-56 h-80 bg-slate-600 rounded-lg"></div>
        <div className="w-56 h-80 bg-slate-600 rounded-lg"></div>
        <div className="w-56 h-80 bg-slate-600 rounded-lg"></div>
        <div className="w-56 h-80 bg-slate-600 rounded-lg"></div>
        <div className="w-56 h-80 bg-slate-600 rounded-lg"></div>
        <div className="w-56 h-80 bg-slate-600 rounded-lg"></div>
        <div className="w-56 h-80 bg-slate-600 rounded-lg"></div>
        <div className="w-56 h-80 bg-slate-600 rounded-lg"></div>
        <div className="w-56 h-80 bg-slate-600 rounded-lg"></div>
        <div className="w-56 h-80 bg-slate-600 rounded-lg"></div>
        <div className="w-56 h-80 bg-slate-600 rounded-lg"></div>
        <div className="w-56 h-80 bg-slate-600 rounded-lg"></div>
        <div className="w-56 h-80 bg-slate-600 rounded-lg"></div>
        <div className="w-56 h-80 bg-slate-600 rounded-lg"></div>
        <div className="w-56 h-80 bg-slate-600 rounded-lg"></div>
        <div className="w-56 h-80 bg-slate-600 rounded-lg"></div>
        <div className="w-56 h-80 bg-slate-600 rounded-lg"></div>
        <div className="w-56 h-80 bg-slate-600 rounded-lg"></div>
        <div className="w-56 h-80 bg-slate-600 rounded-lg"></div> */}
      </div>
    </section>
  );
};

export default Filter;
