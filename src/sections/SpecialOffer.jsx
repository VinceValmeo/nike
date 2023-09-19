import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";
import Button from "../components/Button";

const SpecialOffer = () => (
  <section className="flex justify-wrap items-center max-sm:flex-col-reverse gap-10 max-container justify-evenly">
    <div>
      <img
        src={offer}
        alt="Offer"
        width={600}
        height={500}
        className="object-contain w-full"
      />
    </div>
    <div>
      <h1 className="font-palanquin text-[40px] font-semibold mb-4">
        <span className="text-orange-500 inline-block mt-3">Special </span>
        <span> Offer</span>
      </h1>

      <p className="font-montserrat leading-8 mb-4 text-slate-gray max-w-lg">
        Embark on a shopping journey that redefines your experience with
        unbeatable deals. From premier selections to incredible savings, we
        offer unparalleled value that sets us apart
      </p>
      <p className="font-montserrat leading-8 mb-8 text-slate-gray max-w-lg">
        Navigate a realm of possibilities designed to fulfill your unique
        desires, surpassing the loftiest expectations. Your journey with us is
        nothing short of exceptional
      </p>

      <div className="flex gap-4">
        <Button text="Shop now" iconURL={arrowRight} />
        <Button
          text="Learn more"
          backgroundColor="bg-white"
          borderColor="border-slate-gray"
          textColor="text-slate-gray"
        />
      </div>
    </div>
  </section>
);

export default SpecialOffer;
