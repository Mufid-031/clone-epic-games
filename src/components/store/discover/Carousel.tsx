import { useState } from "react";

const Carousel = (): JSX.Element => {
  const [activePoster, setActivePoster] = useState<string>("https://cdn2.unrealengine.com/epic-games-store-launches-self-publishing-tools-for-game-developers-and-publishers-1920x1080-0a74d3b52f80.jpg");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChangePoster = (poster: string): void => {
    setIsLoading(true);
    setTimeout(() => {
      setActivePoster(poster);
      setIsLoading(false);
    }, 300);
  };



  return (
    <div className="grid grid-cols-[5fr_1fr] gap-5 p-2 mt-10">
      <div className="h-[33rem] rounded-lg overflow-hidden">
        <img className={`w-full h-full object-cover rounded-lg ${isLoading ? "translate-x-[-5%] opacity-50" : "translate-x-0 opacity-100"}`} src={activePoster} alt="" />
      </div>
      <div className="h-[33rem] rounded-lg">
        <ul className="menu menu-lg dropdown-content rounded-box z-[1] w-[16rem] p-2">
          {carouselPoster.map((item, index) => (
            <li key={index} onClick={() => handleChangePoster(item.img)}>
            <div className="flex gap-3">
              <div className="w-10 h-14 rounded-md bg-slate-800">
                <img className="w-full h-full rounded-md object-cover" src={item.poster} alt={item.title} />
              </div>
              <p>{item.title}</p>
            </div>
          </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Carousel;


interface CarouselPoster {
  title: string;
  img: string;
  poster: string;
}

const carouselPoster: CarouselPoster[] = [
  {
    title: "Star Wars Outlaws",
    img: "https://cdn1.epicgames.com/offer/e860fa919120430ca12c557bb676bc6a/EGST_StoreLandscape_2560x1440_2560x1440-e7beda03979167bed00fb2c73bb7998a",
    poster: "https://image.api.playstation.com/vulcan/ap/rnd/202306/3020/0c05ae77009875cbfd368d348c2c4be3d04f7bdcc5e6ce5d.jpg"
  },
  {
    title: "Black Myth: Wukong",
    img: "https://hypeabis.id/assets/content/202408201452051724140325.jpg",
    poster: "https://m.media-amazon.com/images/M/MV5BNGVmZTVjZDMtMzkyZi00MTczLWE4OTUtY2Y1ODBlMGFlYTAxXkEyXkFqcGc@._V1_.jpg"
  },
  {
    title: "Warhammer 40,000: Space Marine 2",
    img: "https://image.api.playstation.com/vulcan/ap/rnd/202212/0711/nqyAJzSXromWZPf7SzCiDtZh.jpg",
    poster: "https://upload.wikimedia.org/wikipedia/en/4/42/Warhammer_40%2C000_Space_Marine_2_cover_art.jpg"
  },
  {
    title: "Genshin Impact",
    img: "https://i.ytimg.com/vi/w1BaF4fd1UM/maxresdefault.jpg",
    poster: "https://asset.kompas.com/crops/OWpkk-uHm6gl1i87SYv-KzkuTos=/300x0:1920x1080/750x500/data/photo/2024/08/29/66cfda2d9fb20.jpg"
  },
  {
    title: "Monter Jam Showdown",
    img: "https://maroonersrock.com/wp-content/uploads/2024/06/Keyart-1920x1080-1.png",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6UJfo6y1MatyTpBdxuolJnkTZBvd_u2h45Q&s"
  },
  {
    title: "Squirrel With a Gun",
    img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2067050/capsule_616x353.jpg?t=1724978316",
    poster: "https://howlongtobeat.com/games/112738_Squirrel_with_a_Gun.jpg"
  },
]