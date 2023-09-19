import { star } from "../assets/icons";

const PopularCard = ({ shoeImg, rating, productName, price }) => (
  <div className="flex  flex-col w-full max-sm:w-full">
    <img src={shoeImg} className="w-[280px] h-[280px]" />

    <div className="mt-8 flex justify-start gap-2.5">
      <img src={star} alt="rating" width={24} height={24} />
      <p className="font-montserrat text-xl leading-normal text-slate-gray">
        ({rating})
      </p>
    </div>
    <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
      {productName}
    </h3>
    <p className="text-orange-500 mt-2 font-semibold text-2xl font-montserrat leading-normal">
      {price}
    </p>
  </div>
);

export default PopularCard;
