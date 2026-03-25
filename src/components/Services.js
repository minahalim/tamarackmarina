import background from '../assets/original4.jpeg';
import Banner from './Banner';

const SERVICES = [
  {
    title: 'Boat Rentals',
    desc: 'Pontoon boats, fishing boats, and more for every occasion. Explore the stunning Muskoka waterways at your own pace.',
  },
  {
    title: 'Mechanical Servicing',
    desc: 'Expert certified mechanics available Monday through Friday. We keep your vessel running at peak performance.',
  },
  {
    title: 'Premium Gas',
    desc: 'Top-quality marine fuel available on-site, ensuring your boat is fueled and ready for every adventure.',
  },
  {
    title: 'Seasonal Mooring',
    desc: 'Secure seasonal moorings with breathtaking views and full access to all marina facilities.',
  },
  {
    title: 'Winter Storage',
    desc: 'Flexible indoor and outdoor winter storage options to protect your investment through the off-season.',
  },
  {
    title: 'Water Taxi',
    desc: 'Convenient water taxi service to explore nearby destinations and the hidden gems of the Muskoka region.',
  },
];

const Services = () => {
  return (
    <>
      <Banner background={background} isSmall title="Services" />
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-gold tracking-[0.3em] uppercase text-xs mb-5">What We Offer</p>
          <h2 className="font-serif text-4xl md:text-5xl text-navy leading-tight mb-8">
            Full-Service Marina Team
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mb-8" />
          <p className="text-gray-500 text-base leading-relaxed">
            From the moment you arrive to the moment you leave, our experienced
            team ensures your time on the water is seamless and memorable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map(({ title, desc }) => (
            <div
              key={title}
              className="group border border-gray-200 hover:border-gold/60 p-10 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-8 h-px bg-gold mb-8" />
              <h3 className="font-serif text-xl text-navy mb-4 group-hover:text-gold transition-colors duration-300">
                {title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
