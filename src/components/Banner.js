const Banner = ({ isSmall = false, background = '', title = '', subtitle = '' }) => {
  return (
    <div
      className={`w-full flex flex-col justify-center items-center text-center bg-cover bg-center text-white ${
        isSmall ? 'pt-48 pb-24' : 'min-h-screen'
      }`}
      style={{
        backgroundImage: `linear-gradient(rgba(7, 18, 42, 0.75), rgba(7, 18, 42, 0.55)), url(${background})`,
      }}
    >
      <p className="text-gold tracking-[0.35em] uppercase text-xs mb-5">Tamarack Park Marina</p>
      <h1 className={`font-serif leading-tight ${ isSmall ? 'text-5xl md:text-6xl' : 'text-6xl md:text-8xl' }`}>
        {title}
      </h1>
      <div className="w-16 h-px bg-gold mx-auto mt-8" />
      {subtitle && (
        <p className="text-cream/70 text-lg mt-6 max-w-xl mx-auto px-6">{subtitle}</p>
      )}
    </div>
  );
};

export default Banner;
