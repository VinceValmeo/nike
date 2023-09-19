import { statistics, shoes } from "../constants";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons/index";
import { bigShoe1 } from "../assets/images";
import { useState } from "react";
import ShoeCard from "../components/ShoeCard";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full border-2 flex xl:flex-row flex-col justify-center min-h-screen gap-10  max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 pl-12">
        <p className="text-orange-500 font-montserrat">
          Our Summer Collections
        </p>
        <h1 className="mt-10 font-palanquin text-8xl font-semibold max-sm:text-[72px] max-sm:leading-[82px]">
          <span className="xl:-bg-white xl:whitespace-nowrap relative z-10 pr-10  sm:bg-white">
            The new Arrival{" "}
          </span>
          <br />
          <span className="text-orange-500 inline-block mt-3">Nike </span>
          <span> Shoes</span>
        </h1>
        <p className="font-montserrat leading-8 mt-6 mb-14 text-slate-gray">
          Discover stylish Nike arrivals, quality, comfort, and innovation for
          your active life.
        </p>

        <Button text="Shop now" iconUrl={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-2 gap-16">
          {statistics.map((item) => (
            <div className="flex flex-col" key={item.label}>
              <h1 className="text-4xl font-semibold font-palanquin">
                {item.value}
              </h1>
              <p className="font-montserrat">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImg}
          alt="shoe colletion"
          width={610}
          height={502}
          className="object-contain relative z-10"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
