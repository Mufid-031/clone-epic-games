const Carousel = (): JSX.Element => {
  return (
    <div className="grid grid-cols-[5fr_1fr] gap-5 p-2 mt-10">
      <div className="h-96 bg-slate-600 rounded-lg"></div>
      <div className="h-96 bg-slate-600 rounded-lg"></div>
    </div>
  );
};

export default Carousel;