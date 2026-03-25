import background from '../assets/original4.jpeg';
import Banner from './Banner';

const HIGHLIGHTS = [
  {
    title: 'Prime Location',
    desc: "Located in Severn Falls & Muskoka, Ontario, one of Ontario's most visited destinations, offering stunning views and a wide variety of outdoor activities.",
  },
  {
    title: 'On-Site Mechanic',
    desc: 'Mechanical services available Monday through Friday to keep your boat in top condition and ready for the water.',
  },
  {
    title: 'Friendly Support',
    desc: "Our support team is dedicated to making sure everything runs smoothly. Whether it's a quick question or an urgent need, you'll always find the help you need.",
  },
  {
    title: 'Knowledgeable Staff',
    desc: "We pride ourselves on a well-trained team passionate about providing the best care for you and your boat, ensuring a seamless experience every time.",
  },
  {
    title: 'Airbnb Cottages',
    desc: 'We offer beautiful cottages listed on Airbnb, each providing a comfortable and cozy retreat in the heart of Muskoka.',
  },
  {
    title: 'Over 20 Years of Service',
    desc: 'Proudly serving Muskoka boaters for over two decades with exceptional quality, reliability, and genuine hospitality.',
  },
];

const AboutUs = () => {
  return (
    <>
      <Banner background={background} isSmall title="About Us" />
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <p className="text-gold tracking-[0.3em] uppercase text-xs mb-5">Our Story</p>
          <h2 className="font-serif text-4xl md:text-5xl text-navy leading-tight mb-8">
            Your Best Value, Full-Service Marina
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mb-8" />
          <p className="text-gray-500 text-base leading-relaxed">
            Tamarack Park &amp; Marina is a trusted full-service marina offering
            boat rentals, boat sales, premium gas, mechanical servicing, seasonal
            mooring, and winter storage. Proudly serving Muskoka boaters for over 20 years.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-14">
          {HIGHLIGHTS.map(({ title, desc }) => (
            <div key={title} className="border-l-2 border-gold pl-8">
              <h3 className="font-serif text-2xl text-navy mb-3">{title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutUs;
