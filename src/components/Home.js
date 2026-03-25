import { Link } from 'react-router-dom';
import video from '../assets/video.mp4';
import thumbnail from '../assets/thumbnail.png';
import banner from '../assets/7.jpg';
import readyToServe from '../assets/3.jpg';
import { ReactComponent as Boat } from '../assets/boat.svg';
import { ReactComponent as Car } from '../assets/car.svg';
import { ReactComponent as Food } from '../assets/food.svg';
import { ReactComponent as Mechanic } from '../assets/mechanic.svg';

const FEATURES = [
  { Icon: Boat, label: 'Boat Storage' },
  { Icon: Car, label: 'Free Parking' },
  { Icon: Food, label: 'Snack Bar' },
  { Icon: Mechanic, label: 'Boat Mechanics' },
];

const Home = () => {
  return (
    <>
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={video}
          poster={thumbnail}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-navy-dark/60" />
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <p className="text-gold tracking-[0.4em] uppercase text-xs mb-6">Welcome to</p>
          <h1 className="font-serif text-6xl md:text-8xl leading-tight mb-6">
            Tamarack Park Marina
          </h1>
          <div className="w-20 h-px bg-gold mx-auto mb-8" />
          <p className="text-cream/75 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            A trusted full-service marina, family owned and operated, nestled in
            the heart of Muskoka, Ontario.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="border border-gold text-gold px-10 py-4 text-xs tracking-[0.2em] uppercase hover:bg-gold hover:text-navy transition-all duration-300"
            >
              Our Services
            </Link>
            <Link
              to="/contact-us"
              className="bg-gold text-navy px-10 py-4 text-xs tracking-[0.2em] uppercase hover:bg-gold-light transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-cream/50">
          <span className="text-xs tracking-[0.25em] uppercase">Scroll</span>
          <div className="w-px h-12 bg-gold/40" />
        </div>
      </div>

      <div className="bg-navy">
        <div className="max-w-5xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
          {FEATURES.map(({ Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-4">
              <Icon className="w-9 h-9 brightness-0 invert opacity-60" />
              <span className="text-xs tracking-[0.2em] uppercase text-cream/50">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-20 items-center">
        <div>
          <p className="text-gold tracking-[0.3em] uppercase text-xs mb-5">Full Service</p>
          <h2 className="font-serif text-4xl md:text-5xl text-navy leading-tight mb-8">
            No Other Marina Offers So Much
          </h2>
          <div className="w-10 h-px bg-gold mb-8" />
          <p className="text-gray-500 leading-relaxed text-base">
            Welcome to Tamarack Marina, home to a trusted full-service marina
            that is family owned and operated. Aside from the exquisite views of
            the dense nature that Muskoka has to offer, we offer boat rentals,
            boat sales, mechanical servicing, premium gas, seasonal mooring and
            winter storage.
          </p>
          <Link
            to="/about-us"
            className="inline-block mt-10 text-gold border-b border-gold/50 pb-1 text-xs tracking-[0.2em] uppercase hover:border-gold transition-colors"
          >
            Learn More
          </Link>
        </div>
        <div className="relative">
          <img src={banner} alt="Marina" className="w-full h-80 object-cover shadow-2xl" />
          <div className="absolute -bottom-5 -right-5 w-full h-full border border-gold/40 -z-10" />
        </div>
      </div>

      <div className="bg-cream">
        <div className="max-w-6xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 md:order-1">
            <img src={readyToServe} alt="Ready to Serve" className="w-full h-80 object-cover shadow-2xl" />
            <div className="absolute -bottom-5 -left-5 w-full h-full border border-gold/40 -z-10" />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-gold tracking-[0.3em] uppercase text-xs mb-5">Our Promise</p>
            <h2 className="font-serif text-4xl md:text-5xl text-navy leading-tight mb-8">
              Ready to Serve You
            </h2>
            <div className="w-10 h-px bg-gold mb-8" />
            <p className="text-gray-500 leading-relaxed text-base">
              At Tamarack Marina we tell boaters &ldquo;relax, it&rsquo;s all
              taken care of&rdquo; and we mean it. Repairs, cleaning, painting,
              storage, fueling, launching &mdash; on-the-water or dockside,
              seasonal slips or flexible winter storage deadline. We do it all.
            </p>
            <Link
              to="/services"
              className="inline-block mt-10 text-gold border-b border-gold/50 pb-1 text-xs tracking-[0.2em] uppercase hover:border-gold transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-navy py-28 px-6 text-center">
        <p className="text-gold tracking-[0.35em] uppercase text-xs mb-4">Testimonials</p>
        <div className="w-12 h-px bg-gold mx-auto mb-12" />
        <blockquote className="font-serif text-cream text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed italic">
          &ldquo;We enjoyed our stay at Tamarack Marina immensely. Your staff were
          professional, courteous, knowledgeable and helpful. It made our stay
          memorable, pleasant and hassle free. We look forward to coming back
          every year.&rdquo;
        </blockquote>
        <div className="w-12 h-px bg-gold mx-auto mt-12 mb-6" />
        <p className="text-gold text-xs tracking-[0.25em] uppercase">
          Lorne Leibel &mdash; Marina Member for 8 Years
        </p>
      </div>

      <div className="bg-cream-dark py-24 px-6 text-center">
        <p className="text-gold tracking-[0.35em] uppercase text-xs mb-5">Plan Your Visit</p>
        <h2 className="font-serif text-4xl md:text-5xl text-navy mb-8">Ready for the Water?</h2>
        <div className="w-10 h-px bg-gold mx-auto mb-10" />
        <Link
          to="/contact-us"
          className="inline-block bg-navy text-cream px-12 py-5 text-xs tracking-[0.2em] uppercase hover:bg-navy-light transition-all duration-300"
        >
          Get in Touch
        </Link>
      </div>
    </>
  );
};

export default Home;
