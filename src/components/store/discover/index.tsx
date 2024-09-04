import Hero from "./Hero";
import Carousel from "./Carousel";
import Filter from "./Filter";
import DealOfWeek from "./DealOfWeek";
import Category from "./Category";
import { GoGift } from "react-icons/go";
import List from "./List";

const Content = (): JSX.Element => {
  return (
    <section className="mt-20 mr-5 ml-1 w-full">
      <Hero />
      <Carousel />
      <Filter title="Discover Something New" />
      <Filter title="Featured Discounts" />
      <DealOfWeek />
      <Category icon={<GoGift size={50} />} title="Free Games" />
      <DealOfWeek />
      <Filter title="Top New Releases" />
      <DealOfWeek />
      <Filter title="Trending" />
      <div className="flex">
        <List divider />
        <List divider />
        <List divider />
        <List />
      </div>
    </section>
  );
};

export default Content;
