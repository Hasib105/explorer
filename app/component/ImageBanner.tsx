import Image from "next/image";

export function ImageActionBanner() {
  return (
    <div className="relative h-60 w-2/3 mx-auto overflow-hidden rounded-md bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')]">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-[#312f2f] to-gray-500 opacity-60 z-0" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center">
          <h2 className="text-white text-2xl font-bold mb-2">Plan & save</h2>
          <p className="text-white text-sm max-w-xs mb-4">
            Save up to 25% at Fifth Season Hotels in India.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-black text-xs py-2 px-4 rounded shadow">
            Book now
          </button>
        </div>
      </div>
    </div>
  );
}
