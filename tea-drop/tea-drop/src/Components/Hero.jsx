import hero from "../Assets/hero.jpg"; // Confirm this path is correct

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="relative">
        <img
          src={hero}
          alt="Tea set"
          className="h-[420px] w-full object-cover md:h-[520px] transition-opacity duration-500 hover:opacity-90"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />

        {/* Soft overlay */}
        <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 hover:bg-black/50"></div>

        {/* Text content */}
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-4 text-white">
            <div className="max-w-xl ml-4 space-y-4 animate-fade-in">
              <p className="text-sm tracking-wide uppercase bg-teal-500/20 px-3 py-1 rounded-full inline-block">
                BLACK TEA COLLECTION
              </p>
              <h1 className="text-4xl md:text-5xl font-semibold leading-tight drop-shadow-lg">
                Go bold, go black
              </h1>
              <p className="text-base md:text-lg text-gray-100 drop-shadow-md">
                Bring comfort and flavour with our Black Tea collection
              </p>
              <button className="mt-6 inline-block bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-teal-600 hover:shadow-md transition-all duration-300 transform hover:scale-105">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>

        {/* Carousel dots */}
        <div className="absolute bottom-4 right-4 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-white/80 hover:bg-teal-500 transition-colors duration-300 cursor-pointer"></span>
          <span className="h-2 w-2 rounded-full bg-white/50 hover:bg-teal-500 transition-colors duration-300 cursor-pointer"></span>
          <span className="h-2 w-2 rounded-full bg-white/50 hover:bg-teal-500 transition-colors duration-300 cursor-pointer"></span>
          <span className="h-2 w-2 rounded-full bg-white/50 hover:bg-teal-500 transition-colors duration-300 cursor-pointer"></span>
        </div>
      </div>
    </section>
  );
}
