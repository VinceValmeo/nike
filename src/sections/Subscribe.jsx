import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      className="max-container flex  justify-between items-center max-lg:flex-col gap-10"
      id="contact-us"
    >
      <div>
        <h1 className="font-palanquin text-4xl leading-[68px] max-w-md font-bold">
          <span>Sign Up for </span>
          <span className="text-orange-500 inline-block mt-3">Updates </span>
          <span> & Newsletter</span>
        </h1>
      </div>

      {/* <div className="border border-slate-400 rounded-full flex items-center justify-between px-1 py-1 lg:max-w-1/2 w-full max-sm:flex-col"> */}
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input
          type="email"
          placeholder="subscribe@nike.com"
          className=" input"
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          {" "}
          <Button text="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
