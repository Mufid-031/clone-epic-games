const Hero = (): JSX.Element => {
  return (
    <div className="grid grid-cols-2 gap-5 w-full p-2">
      <div className="h-80 bg-slate-600 rounded-lg">
        <img className="w-full h-full object-cover object-top rounded-lg" src="https://cdn2.unrealengine.com/en-pegi-egs-mobile-qr-code-breaker-1-1920x1080-986d135968e7.jpg?h=480&quality=medium&resize=1&w=854" alt="" />
      </div>
      <div className="h-80 bg-slate-600 rounded-lg">
        <img className="w-full h-full object-cover object-top rounded-lg" src="https://cdn2.unrealengine.com/fneco-egs-mobilerewards-social-1920x1080-1920x1080-fcffcaacb7a3.jpg" alt="" />
      </div>
    </div>
  );
};

export default Hero;