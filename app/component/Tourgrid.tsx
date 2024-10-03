import Image, { StaticImageData } from "next/image";
import card_img from "../assets/delhi.avif";
import { IconMapPin, IconCalendar, IconTag } from "@tabler/icons-react";
import Link from "next/link";
interface Tour {
  image: StaticImageData; // Use StaticImageData for imported images
  title: string;
  rating: number;
  reviews: number;
  nights: number;
  days: number;
  price: number;
}

const tours: Tour[] = [
  {
    image: card_img,
    title: "Explore Delhi",
    rating: 4,
    reviews: 1,
    nights: 1,
    days: 2,
    price: 0,
  },
  // Add more tour objects as needed
];

const TourCard = ({
  image,
  title,
  rating,
  reviews,
  nights,
  days,
  price,
}: Tour) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden m-4 transition-transform duration-300 hover:shadow-xl group border border-gray-200">
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          className="size-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 object-center"
          priority
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <div className="flex items-center mt-1">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={`text-yellow-500 ${
                index < rating ? "text-yellow-500" : "text-gray-300"
              }`}
            >
              ★
            </span>
          ))}
          <span className="text-gray-500 ml-2 text-sm">
            ({reviews} Review{reviews !== 1 ? "s" : ""})
          </span>
        </div>
        <div className="mt-4 flex items-center text-gray-600">
          <IconMapPin size={20} className="mr-2" />
          <span>{nights} Nights</span>
        </div>
        <div className="mt-2 flex items-center text-gray-600">
          <IconCalendar size={20} className="mr-2" />
          <span>{days} Days</span>
        </div>
        <div className="mt-2 flex items-center text-gray-600">
          <IconTag size={20} className="mr-2" />
          <span>from ₹{price.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

const TourGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2">
      <h2 className="col-span-full text-3xl font-bold text-gray-800 mb-4 text-center">
        Explore Our Tours
      </h2>{" "}
      {/* Added padding to the grid */}
      {[...Array(8)].map((_, index) => (
        <Link key={index} href={`/details/`}>
          <TourCard key={index} {...tours[index % tours.length]} />
        </Link>
      ))}
    </div>
  );
};

export default TourGrid;
