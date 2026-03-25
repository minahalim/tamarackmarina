import background from '../assets/original6.jpeg';
import Banner from './Banner';

const ContactUs = () => {
  return (
    <>
      <Banner background={background} isSmall title="Contact Us" />
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-gold tracking-[0.3em] uppercase text-xs mb-5">Get in Touch</p>
          <h2 className="font-serif text-4xl md:text-5xl text-navy leading-tight mb-8">
            We'd Love to Hear From You
          </h2>
          <div className="w-12 h-px bg-gold mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Map */}
          <div className="w-full h-96 shadow-2xl overflow-hidden">
            <iframe
              title="Tamarack Park Marina Location"
              src="https://www.google.com/maps?q=1941+Tamarack+Ln,+Coldwater,+ON+L0K+1E0,+Canada&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-10">
            <div>
              <p className="text-gold tracking-[0.3em] uppercase text-xs mb-5">Contact Information</p>
              <h3 className="font-serif text-3xl text-navy mb-6">Tamarack Park Marina</h3>
              <div className="w-8 h-px bg-gold mb-8" />
            </div>

            <div className="flex flex-col gap-8">
              <div className="border-l-2 border-gold pl-6">
                <p className="text-gold/80 uppercase text-xs tracking-widest mb-2">Address</p>
                <p className="text-gray-600 leading-relaxed">
                  1941 Tamarack Ln<br />
                  Coldwater, ON L0K 1E0<br />
                  Canada
                </p>
              </div>

              <div className="border-l-2 border-gold pl-6">
                <p className="text-gold/80 uppercase text-xs tracking-widest mb-2">Phone</p>
                <a
                  href="tel:+19059030910"
                  className="text-gray-600 hover:text-gold transition-colors text-base"
                >
                  +1 (905) 903-0910
                </a>
              </div>

              <div className="border-l-2 border-gold pl-6">
                <p className="text-gold/80 uppercase text-xs tracking-widest mb-2">Email</p>
                <a
                  href="mailto:info@tamarackmarina.com"
                  className="text-gray-600 hover:text-gold transition-colors text-base"
                >
                  info@tamarackmarina.com
                </a>
              </div>

              <div className="border-l-2 border-gold pl-6">
                <p className="text-gold/80 uppercase text-xs tracking-widest mb-2">Mechanic Hours</p>
                <p className="text-gray-600">Monday &ndash; Friday</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
