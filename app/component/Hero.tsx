
export default function HeroSection() {
  return (
    <section
      className="relative w-full md:h-[500px] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        {/* Header Section */}
        <div className="space-y-4 mt-10">
          <h1 className="text-xl md:text-5xl font-bold text-gray-900">
            Let&apos;s Enjoy Your Life, Explore the World
          </h1>
          <button className="mt-4 px-5 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition">
            Explore More
          </button>
        </div>

        {/* Search Form */}
        <div className="w-full max-w-4xl mt-10 bg-white shadow-lg p-6 rounded-[45px] space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <label className="text-sm text-gray-500 sr-only">Destination</label>
              <input
                type="text"
                placeholder="Enter destination"
                className="w-full border-r-2 p-2 md:p-3 focus:rounded-xl focus:outline-none focus:ring focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="text-sm text-gray-500 sr-only">Average Price</label>
              <input
                type="text"
                placeholder="$100 - $500"
                className="w-full border-r-2 p-2 md:p-3 focus:rounded-xl focus:outline-none focus:ring focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="text-sm text-gray-500 sr-only">Travel Date</label>
              <input
                type="date"
                className="w-full border-none p-2 md:p-3 focus:rounded-xl focus:outline-none focus:ring focus:ring-orange-500"
              />
            </div>
            <div className="flex items-end">
              <button className="w-full py-3 bg-orange-500 text-white hover:bg-orange-600 transition rounded-full text-lg font-semibold">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
