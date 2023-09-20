import { star } from "../assets/icons";
const ReviewCard = ({ imgURL, feedback, rating, customerName }) => {
  return (
    <div className="flex flex-col items-center justify-center mb-20">
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full mb-8"
        height={100}
        width={100}
      />
      <p className="font-montserrat leading-8 text-slate-gray  max-w-sm text-center">
        {feedback}
      </p>
      <div className="mt-2 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          ({rating})
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
