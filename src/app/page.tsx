import NavBar from "./components/navbar/NavBar";
import Hero from "./components/hero/Hero";
import { ThemeModeScript } from "flowbite-react";
import { TimeLine } from "./components/timeLine/TimeLine";

export default function Home() {
  return (
    <div className="flex lg:flex-row flex-col">
        <ThemeModeScript />
      <div className="w-full lg:w-auto">
        <NavBar />
      </div>
      <div className="w-full lg:w-full lg:pt-[0px] lg:pt-0  flex">
        <div className="w-2/12 lg:block hidden">
          <h2></h2>
        </div>
        <div className="w-full lg:w-10/12  text-white  p-4 m-2 ">
        <h2 className="font-light p-4 lg:ml-0 shadow-xl bg-primary text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            deserunt quidem debitis esse dolore corporis facere in. Ea modi nisi,
            officiis odit similique, alias asperiores accusamus aspernatur animi
            rerum minima!
          </h2>
          <div className="w-full mt-10 bg-blue-900">
            <Hero />
            <TimeLine />
          </div>
        </div>
      </div>
    </div>
  );
}
