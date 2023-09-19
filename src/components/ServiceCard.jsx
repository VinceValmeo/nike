import React from "react";

const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
      <div className="bg-orange-500 rounded-full h-10 w-10 flex justify-center items-center">
        <img src={imgURL} alt="service icon" className="" />
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {label}
      </h3>
      <p className="font-montserrat text-xl leading-normal text-slate-gray">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
