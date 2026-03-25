import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/logo.svg';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about-us', label: 'About Us' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/rentals', label: 'Rentals' },
  { to: '/contact-us', label: 'Contact Us' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on navigation
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const transparent = isHome && !scrolled;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-20 flex items-center justify-between px-6 md:px-12 transition-all duration-500 ${
          transparent
            ? 'bg-transparent'
            : 'bg-navy/95 backdrop-blur-sm shadow-lg'
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center flex-shrink-0">
          <Logo className="h-10 w-auto brightness-0 invert" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="text-xs tracking-[0.2em] uppercase text-cream/80 hover:text-gold transition-colors duration-300"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span className={`block h-px bg-cream transition-all duration-300 ${ isMenuOpen ? 'w-6 rotate-45 translate-y-[9px]' : 'w-6' }`} />
          <span className={`block h-px bg-cream transition-all duration-300 ${ isMenuOpen ? 'opacity-0 w-0' : 'w-6' }`} />
          <span className={`block h-px bg-cream transition-all duration-300 ${ isMenuOpen ? 'w-6 -rotate-45 -translate-y-[9px]' : 'w-6' }`} />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 bg-navy-dark/70 z-40 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-navy z-50 md:hidden flex flex-col justify-center gap-2 px-10 transition-transform duration-500 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="w-8 h-px bg-gold mb-10" />
        {NAV_LINKS.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className="font-serif text-2xl text-cream hover:text-gold transition-colors py-2 border-b border-navy-light"
          >
            {label}
          </Link>
        ))}
        <div className="w-8 h-px bg-gold mt-10" />
        <p className="text-cream/40 text-xs tracking-widest uppercase mt-4">Muskoka, Ontario</p>
      </div>
    </>
  );
};

export default Navbar;
