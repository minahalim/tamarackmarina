import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/logo.svg';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about-us', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/rentals', label: 'Rentals' },
  { to: '/contact-us', label: 'Contact Us' },
];

const Footer = () => {
  return (
    <footer className="bg-navy-dark text-cream/60">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-14 pb-14 border-b border-gold/20">
          {/* Brand */}
          <div>
            <Logo className="h-12 w-auto brightness-0 invert mb-5" />
            <p className="text-sm leading-relaxed text-cream/40">
              Family owned &amp; operated full-service marina in the heart of
              Muskoka, Ontario. Proudly serving boaters for over 20 years.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-gold tracking-[0.25em] uppercase text-xs mb-7">Navigation</p>
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="text-sm hover:text-gold transition-colors duration-300"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-gold tracking-[0.25em] uppercase text-xs mb-7">Contact Us</p>
            <div className="flex flex-col gap-5 text-sm">
              <div>
                <p className="text-cream/30 uppercase text-xs tracking-widest mb-1">Address</p>
                <p>1941 Tamarack Ln<br />Coldwater, ON L0K 1E0</p>
              </div>
              <div>
                <p className="text-cream/30 uppercase text-xs tracking-widest mb-1">Phone</p>
                <a href="tel:+19059030910" className="hover:text-gold transition-colors">
                  +1 (905) 903-0910
                </a>
              </div>
              <div>
                <p className="text-cream/30 uppercase text-xs tracking-widest mb-1">Email</p>
                <a href="mailto:info@tamarackmarina.com" className="hover:text-gold transition-colors">
                  info@tamarackmarina.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-cream/30">
          <p>&copy; {new Date().getFullYear()} Tamarack Park Marina. All rights reserved.</p>
          <p>Severn Falls &amp; Muskoka, Ontario, Canada</p>
          <p>
            Need a website crafted for your business? Contact{' '}
            <a href="tel:+14377755689" className="text-gold hover:text-gold-light transition-colors">
              437-775-5689
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
