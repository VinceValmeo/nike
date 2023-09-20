import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";

const CustomerReviews = () => {
  return (
    <section className="py-8 max-container">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-palanquin text-[40px] font-semibold">
          <span>What Our </span>

          <span className="text-orange-500 inline-block mt-3">Customers </span>
          <span> Say?</span>
        </h1>
        <p className="font-montserrat leading-8 text-slate-gray max-w-lg text-center">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
      </div>

      <div className="flex justify-evenly mt-10 flex-col md:flex-row">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            imgURL={review.imgURL}
            feedback={review.feedback}
            rating={review.rating}
            customerName={review.customerName}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
