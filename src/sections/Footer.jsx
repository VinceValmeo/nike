import { footerLogo } from "../assets/images";
import { socialMedia } from "../constants";
import { footerLinks } from "../constants";
import { copyrightSign } from "../assets/icons";

const Footer = () => (
  <footer className="max-container">
    <div className=" flex flex-col justify-between md:flex-row gap-10">
      <div className="flex items-start flex-col mb-10 gap-5">
        <a href="/">
          <img src={footerLogo} height={200} width={200} className="mb-4" />
        </a>
        <p className="font-montserrat max-w-sm text-sm  text-slate-300 mb-4">
          Get shoes ready for the new term at your nearest Nike store. Find Your
          perfect Size In Store. Get Rewards
        </p>
        <div className="flex gap-4">
          {socialMedia.map((item) => (
            <div className="bg-white rounded-full p-1.5 cursor-pointer ">
              <img src={item.src} alt={item.alt} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
        {footerLinks.map((item) => (
          <div key={item.title}>
            <h2 className="text-white font-palanquin text-[25px] font-semibold mb-2">
              {item.title}
            </h2>
            <ul>
              {item.links.map((link) => (
                <li
                  className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray"
                  key={link.name}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className=" text-slate-300 max-container flex justify-between mt-10 font-montserrat flex-col md:flex-row gap-2">
      <div className="flex gap-2 items-cente">
        <img src={copyrightSign} alt="copyright sign" />
        <p>Copyright. All rights reserved</p>
      </div>

      <p className="cursor-pointer">Terms & Conditions</p>
    </div>
  </footer>
);

export default Footer;
