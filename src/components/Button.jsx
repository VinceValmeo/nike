const Button = ({ text, iconURL }) => (
  <button className="bg-orange-500 py-2 px-6 rounded-full text-white flex items-center mb-12">
    <p>{text}</p>
    {iconURL && (
      <img
        src={iconURL}
        alt="arrow right icon"
        className="ml-2 rounded-full bg-white w-5 h-5"
      />
    )}
  </button>
);

export default Button;
