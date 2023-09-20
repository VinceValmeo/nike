import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";

const Services = () => (
  <section className="max-container flex justify-center flex-wrap">
    <div className="flex gap-9 flex-col lg:flex-row">
      {services.map((service) => (
        <ServiceCard
          key={service.label}
          imgURL={service.imgURL}
          label={service.label}
          subtext={service.subtext}
        />
      ))}
    </div>
  </section>
);

export default Services;
