import background from "../assets/original4.jpeg";
import Banner from "./Banner";

import banner from "../assets/7.jpg";

const Rentals = () => {
  return (
    <>
      <Banner background={background} isSmall title="Rentals" />{" "}
      <div className="w-3/4 m-auto my-10 text-xl gap-10 flex flex-col">
        <div className="flex flex-row justify-evenly gap-6">
          <div className="w-full">
            <div className="text-5xl mb-10">Airbnb Rentals</div>
            <hr className="my-5" />
            At Tamarack Park & Marina, we offer charming cottages and cozy
            cabins for your perfect Muskoka getaway. Our cottages are modern and
            beautifully designed, featuring all the amenities you need for a
            comfortable stay. One of our cabins is a cozy, rustic wood cabin,
            perfect for those seeking a peaceful retreat, while the other cabin
            offers a sleek, modern design for those who enjoy a more
            contemporary experience. Whether you prefer the rustic charm of our
            wood cabin or the stylish comfort of our modern options, each
            provides a relaxing and memorable escape.
          </div>
        </div>

        <div className="flex flex-row justify-evenly gap-6">
          <div className="w-full">
            <div className="text-5xl mb-10">Boat Rentals</div>
            <hr className="my-5" />
            We offer a wide variety of boat rentals to suit every need and
            preference. Whether you're looking for a relaxing day on the water
            or an adventure-filled outing, we have options including pontoon
            boats, fishing boats, and more. Our rentals are perfect for
            exploring the stunning Muskoka region, whether you're fishing,
            cruising, or just enjoying the scenery. In addition to rentals, we
            also offer guided boat tours with a knowledgeable driver, providing
            you with a unique way to discover the local sights and hidden gems
            of the area.
          </div>
        </div>
      </div>
    </>
  );
};

export default Rentals;
