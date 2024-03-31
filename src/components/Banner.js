const Banner = ({ isSmall = false, background = "", title = "" }) => {
  return (
    <div
      className={`w-full ${
        isSmall ? "p-20" : "p-40"
      } flex flex-col justify-center items-center text-center gap-3 bg-cover bg-center text-white`}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.3), rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)), url(${background})`,
      }}
    >
      {title === "Tamarack Park Marina" ? (
        <div className="text-3xl text-gray-300">WELCOME TO</div>
      ) : null}
      <div className="text-6xl">{title}</div>
    </div>
  );
};

export default Banner;
