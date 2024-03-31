import background from "../assets/marina.jpeg";
import Banner from "./Banner";

import banner from "../assets/7.jpg";
import readyToServe from "../assets/3.jpg";
import { ReactComponent as Car } from "../assets/car.svg";
import { ReactComponent as Boat } from "../assets/boat.svg";
import { ReactComponent as Food } from "../assets/food.svg";
import { ReactComponent as Mechanic } from "../assets/mechanic.svg";

const Home = () => {
  return (
    <>
      <Banner background={background} title="Tamarack Park Marina" />
      <div className="w-3/4 m-auto my-10 text-xl gap-10 flex flex-col">
        <div className="flex flex-row justify-evenly gap-6">
          <div className="w-1/2">
            <div className="text-5xl mb-10">No Other Marina Offers So Much</div>
            <hr className="my-5" />
            Welcome to Tamarack Marina, home to a trusted full-service marina
            that is family owned and operated. Aside from the exquisite views of
            the dense nature that Muskoka has to offer, we offer boat rentals,
            boat sales, mechanical servicing, premium gas, seasonal mooring and
            winter storage.
            <div className="my-6 flex w-full justify-between">
              <div className="flex flex-col items-center text-sm gap-4">
                <Boat className="w-10" />
                BOAT STORAGE
              </div>
              <div className="flex flex-col items-center text-sm gap-4">
                <Car className="w-10" />
                FREE PARKING
              </div>
              <div className="flex flex-col items-center text-sm gap-4">
                <Food className="w-10" />
                SNACK BAR
              </div>
              <div className="flex flex-col items-center text-sm gap-4">
                <Mechanic className="w-10" />
                BOAT MECHANICS
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <img src={banner} alt="" className="rounded-xl" />
          </div>
        </div>

        <div className="flex flex-row justify-evenly gap-6">
          <div className="w-1/2">
            <img src={readyToServe} alt="" className="rounded-xl" />
          </div>
          <div className="w-1/2">
            <div className="text-5xl mb-10">Ready to Serve You</div>
            <hr className="my-5" />
            At Tamarack Marina we tell boaters “relax, it’s all taken care of”
            and we mean it. If you want us to repair your boat, clean it, paint
            it, store it, fill it or put it in the water we can. If you require
            on-the-water repairs, we can do those. If you need a slip for a boat
            that is only 20 feet we can accommodate you. And if you want to
            stretch the boating season well into the fall, go ahead–our boat
            storage deadline is flexible.
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="text-5xl">OUR MARINA MEMBERS SAY</div>
          <hr className="my-5 w-full" />
          <div className="text-center">
            LORNE LEIBEL With the Marina for 8 years We wanted to let you know
            that we enjoyed our stay at Tamarack Marina last summer and to
            complement your staff, Michelle, Kelly, Lexy, Jenna and Jaime for
            being professional, courteous, knowledgeable and helpful to our
            wants and needs. It made our stay memorable, pleasant and hassle
            free. We are looking forward to another fishing holiday at the
            Marina this summer.
            <br />
            EDNA MCCALLION
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
