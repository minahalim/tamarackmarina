import background from '../assets/original4.jpeg';
import Banner from './Banner';
import cottageImg from '../assets/original2.jpeg';
import boatImg from '../assets/original3.jpeg';
import { Link } from 'react-router-dom';

const Rentals = () => {
  return (
    <>
      <Banner background={background} isSmall title="Rentals" />
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center max-w-2xl mx-auto mb-24">
          <p className="text-gold tracking-[0.3em] uppercase text-xs mb-5">Explore &amp; Stay</p>
          <h2 className="font-serif text-4xl md:text-5xl text-navy leading-tight mb-8">
            Rentals &amp; Accommodations
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mb-8" />
          <p className="text-gray-500 text-base leading-relaxed">
            Whether you want to spend the night or spend the day on the water,
            we have everything you need for the perfect Muskoka getaway.
          </p>
        </div>

        {/* Airbnb Cottages */}
        <div className="grid md:grid-cols-2 gap-20 items-center mb-28">
          <div>
            <p className="text-gold tracking-[0.3em] uppercase text-xs mb-5">Accommodations</p>
            <h3 className="font-serif text-3xl md:text-4xl text-navy leading-tight mb-6">
              Airbnb Cottages &amp; Cabins
            </h3>
            <div className="w-8 h-px bg-gold mb-8" />
            <p className="text-gray-500 leading-relaxed text-base mb-6">
              Charming cottages and cozy cabins for your perfect Muskoka
              getaway. Choose from our rustic wood cabin or our sleek modern
              option &mdash; each providing a relaxing and memorable escape with
              all the amenities you need.
            </p>
            <p className="text-gray-500 leading-relaxed text-base">
              Whether you prefer the rustic charm of our wood cabin or the
              stylish comfort of our modern cottage, every stay is designed to
              help you fully unwind and enjoy Muskoka at its finest.
            </p>
            <a
              href="https://www.airbnb.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-10 text-gold border-b border-gold/50 pb-1 text-xs tracking-[0.2em] uppercase hover:border-gold transition-colors"
            >
              View on Airbnb
            </a>
          </div>
          <div className="relative">
            <img
              src={cottageImg}
              alt="Cottage"
              className="w-full h-96 object-cover shadow-2xl"
            />
            <div className="absolute -bottom-5 -right-5 w-full h-full border border-gold/40 -z-10" />
          </div>
        </div>

        {/* Boat Rentals */}
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 md:order-1">
            <img
              src={boatImg}
              alt="Boat Rental"
              className="w-full h-96 object-cover shadow-2xl"
            />
            <div className="absolute -bottom-5 -left-5 w-full h-full border border-gold/40 -z-10" />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-gold tracking-[0.3em] uppercase text-xs mb-5">On the Water</p>
            <h3 className="font-serif text-3xl md:text-4xl text-navy leading-tight mb-6">
              Boat Rentals &amp; Guided Tours
            </h3>
            <div className="w-8 h-px bg-gold mb-8" />
            <p className="text-gray-500 leading-relaxed text-base mb-6">
              We offer a wide variety of boat rentals including pontoon boats,
              fishing boats, and more &mdash; perfect for exploring the
              stunning Muskoka waters whether you're fishing, cruising, or
              simply enjoying the scenery.
            </p>
            <p className="text-gray-500 leading-relaxed text-base">
              We also offer guided boat tours with a knowledgeable driver,
              providing a unique way to discover local sights and hidden gems
              across the region.
            </p>
            <Link
              to="/contact-us"
              className="inline-block mt-10 text-gold border-b border-gold/50 pb-1 text-xs tracking-[0.2em] uppercase hover:border-gold transition-colors"
            >
              Inquire Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rentals;
