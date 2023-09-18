const Button = ({ text, iconUrl }) => (
  <button className="bg-orange-500 py-2 px-8 rounded-full text-white flex items-center mb-12">
    <p className="mr-4">{text}</p>
    <img src={iconUrl} alt="arrow" className="w-5 h-5" />
  </button>
);

export default Button;
