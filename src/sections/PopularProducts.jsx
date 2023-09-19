import { products } from "../constants";
import PopularCard from "../components/PopularCard";

const PopularProduct = () => (
  <section id="products" className="max-container max-sm:mt-12">
    <div className="flex flex-col justify-start gap-5">
      <h1 className="font-palanquin text-[40px] font-semibold">
        <span>Our </span>
        <span className="text-orange-500 inline-block mt-3">Popular </span>
        <span> Products</span>
      </h1>
      <p className="font-montserrat leading-8 mt-6 mb-14 text-slate-gray max-w-lg">
        Experience top-notch quality and style with out sought-after selections.
        Discover a world of comfort, design and value.
      </p>
    </div>
    <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14 cursor-pointer">
      {products.map((item) => (
        <PopularCard
          key={item.name}
          shoeImg={item.imgURL}
          rating={item.rating}
          productName={item.name}
          price={item.price}
        />
      ))}
    </div>
  </section>
);

export default PopularProduct;
