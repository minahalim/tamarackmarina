import background from "../assets/original4.jpeg";
import Banner from "./Banner";

import banner from "../assets/7.jpg";
import readyToServe from "../assets/3.jpg";

const AboutUs = () => {
  return (
    <>
      <Banner background={background} isSmall title="About Us" />{" "}
      <div className="w-3/4 m-auto my-10 text-xl gap-10 flex flex-col">
        <div className="flex flex-row justify-evenly gap-6">
          <div className="w-full">
            <div className="text-5xl mb-10">
              Your Best Value, Full Service Tamarack Marina
            </div>
            <hr className="my-5" />
            tamarack Park & Marina is a trusted full-service marina offering
            boat rentals, boat sales, premium gas,mechanical servicing, seasonal
            mooring, and winter storage. Known for their exceptional quality and
            durability in aluminum finishing, pontoon, and deck boats. Proudly
            serving Muskoka boaters for over 20 years!
          </div>
        </div>

        <div className="flex flex-row justify-evenly gap-6">
          <div className="w-full">
            <div className="text-5xl mb-10">Prime Location</div>
            <hr className="my-5" />
            Located in Severn Falls & Muskoka, Ontario, one of Ontario's
            must-visit destinations, offering stunning views and a wide variety
            of outdoor activities.
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="w-full">
            <div className="text-5xl">On-Site Mechanic</div>
            <hr className="my-5" />
            Mechanical services available Monday - Friday to keep your boat in
            top condition and ready for the water.
          </div>
        </div>

        <div className="flex flex-row justify-evenly gap-6">
          <div className="w-full">
            <div className="text-5xl mb-10">Friendly Support</div>
            <hr className="my-5" />
            Our support team is dedicated to making sure everything runs
            smoothly. Whether it's a quick question or an urgent need, you’ll
            always find the help you need.
          </div>
        </div>

        <div className="flex flex-row justify-evenly gap-6">
          <div className="w-full">
            <div className="text-5xl mb-10">Knowledgeable Staff </div>
            <hr className="my-5" />
            We pride ourselves on having a well-trained team that’s passionate
            about providing the best care for you and your boat, ensuring a
            seamless experience.
          </div>
        </div>

        <div className="flex flex-row justify-evenly gap-6">
          <div className="w-full">
            <div className="text-5xl mb-10">Airbnb Cottages </div>
            <hr className="my-5" />
            Looking for the perfect place to stay during your Muskoka getaway?
            We offer a selection of beautiful cottages on Airbnb, each offering
            a comfortable and cozy retreat. Whether you're looking to relax,
            explore the scenic views, or enjoy water activities, our cottages
            provide the ideal spot for a memorable stay. With all the amenities
            you need, our cottages make it easy to enjoy everything Muskoka has
            to offer.
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
