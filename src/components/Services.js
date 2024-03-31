import background from "../assets/original4.jpeg";
import Banner from "./Banner";

import banner from "../assets/7.jpg";

const Services = () => {
  return (
    <>
      <Banner background={background} isSmall title="Services" />{" "}
      <div className="w-3/4 m-auto my-10 text-xl gap-10 flex flex-col">
        <div className="flex flex-row justify-evenly gap-6">
          <div className="w-full">
            <div className="text-5xl mb-10">Tamarack Marina Service Team</div>
            <hr className="my-5" />
            We are a trusted full-service marina offering boat rentals, a
            convenient water taxi service to explore nearby destinations, boat
            sales, mechanical servicing, premium gas, seasonal mooring, and
            winter indoor/outdoor storage. Our experienced team provides
            top-notch mechanical servicing to keep your boat running smoothly,
            to ensure you're fueling up with the best quality.
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
