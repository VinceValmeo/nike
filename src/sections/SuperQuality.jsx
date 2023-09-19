import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => (
  <section
    id="about-us"
    className="flex justify-between items-center max-lg:flex-col w-full max-container"
  >
    <div className="flex flex-col justify-start gap-5">
      <h1 className="font-palanquin text-[40px] font-semibold">
        <span>We Provide You </span>
        <br />
        <span className="text-orange-500 inline-block mt-3">
          Super Quality{" "}
        </span>
        <span> Shoes</span>
      </h1>
      <p className="font-montserrat leading-8 text-slate-gray max-w-lg">
        Ensuring premium comfort and style, our meticulously crafted footwear is
        edsigned to elevate your experience, providing you with unmatched
        quality, innovation, and a touch of elegance
      </p>
      <p className="font-montserrat leading-8 mb-4 text-slate-gray max-w-lg">
        Our dedication to detail and excellence ensures your satisfaction.
      </p>

      <div>
        <Button text="View details" iconUrl="none" />
      </div>
    </div>

    <div className="flex flex-1 justify-between items-center">
      <img
        src={shoe8}
        alt="Quality Shoes"
        className="object-contain"
        width={450}
        height={402}
      />
    </div>
  </section>
);

export default SuperQuality;
