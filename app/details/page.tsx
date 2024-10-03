"use client";

import { useState , useEffect } from "react";
import { motion } from "framer-motion";
import {
  IconCheck,
  IconX,
  IconChevronLeft,
  IconChevronRight,
  IconCalendar,
  IconUsers,
  IconLanguage,
  IconRoute,
} from "@tabler/icons-react";


// Image carousel component (you can use a library like react-slick or Swiper.js)
const ImageCarousel = () => {
  const images = [
    "https://i0.wp.com/touristjourney.com/wp-content/uploads/2020/12/shutterstock_87272683-scaled.jpg?fit=2560%2C1398&ssl=1",
    "https://cdn.generationvoyage.fr/2021/01/guide-new-delhi-1.jpg",
    "https://www.tusktravel.com/blog/wp-content/uploads/2023/12/Historical-Monuments-in-Delhi.jpg",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/7b/01/1d/caption.jpg?w=1200&h=-1&s=1&cx=1920&cy=1080&chk=v1_4de65d90c08149c68f26"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => nextImage(), 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="carousel relative w-full mb-8">
      {/* Left Button */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-orange-500 p-2 rounded-full text-white hover:bg-orange-600 transition z-10 opacity-50"
      >
        <IconChevronLeft size={32} />
      </button>

      {/* Image */}
      <motion.div
        key={currentIndex}
        className="carousel-item"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={images[currentIndex]}
          alt={`Tour image ${currentIndex + 1}`}
          className="w-full h-96 object-cover"
        />
      </motion.div>

      {/* Right Button */}
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-orange-500 p-2 rounded-full text-white hover:bg-orange-600 transition z-10 opacity-50"
      >
        <IconChevronRight size={32} />
      </button>
    </div>
  );
};

const DetailsPage = () => {
  return (
    <div className="container py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Image Carousel */}
      <ImageCarousel />

      {/* Tour Details */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h1 className="text-3xl font-bold mb-4">
            Amazing City Tour of Delhi including Red Fort
          </h1>
          <div className="flex flex-col gap-2 text-lg">
            <p className="flex items-center">
              <IconCalendar className="mr-2 text-orange-600" />
              Duration: 1 Night / 2 Days
            </p>
            <p className="flex items-center">
              <IconRoute className="mr-2 text-orange-600" />
              Tour Type: Daily Tour
            </p>
            <p className="flex items-center">
              <IconUsers className="mr-2 text-orange-600" />
              Group Size: 12-15 People
            </p>
            <p className="flex items-center">
              <IconLanguage className="mr-2 text-orange-600" />
              Languages: English, Español, Français, Hindi, Japanese
            </p>
          </div>
        </div>
      </section>

      {/* About & Booking Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 items-start">
        {/* Left (About Section) */}
        <div className="md:col-span-2">
          <h2 className="text-3xl font-semibold mb-4">About This Tour</h2>
          <p className="text-lg text-gray-600 mb-6">
            Discover the beauty of the city with our exclusive 2-day city tour.
            You will visit the main attractions such as the Red Fort, India
            Gate, and the Lotus Temple, learn about the history of the city and
            its Mughal-era landmarks, and experience local culture by trying
            street food and seeing a traditional Indian dance performance. Our
            tour is perfect for those who want to see it all in a short time and
            have a memorable experience.
          </p>

          {/* Tour Highlights */}
          <h3 className="text-2xl font-semibold mb-4">Tour Highlights</h3>
          <ul className="list-disc ml-6 text-lg text-gray-600">
            <li>Explore the historic downtown area</li>
            <li>
              Visit world-famous landmarks such as the Red Fort, India Gate, and
              the Lotus Temple
            </li>
            <li>Experience local cuisine by trying street food and drinks</li>
            <li>Witness a traditional Indian dance performance</li>
            <li>
              Learn about the history and culture of the city from our
              knowledgeable guide
            </li>
          </ul>

          {/* Included Section */}
          <h3 className="text-2xl font-semibold mb-4">Included</h3>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center">
              <IconCheck size={24} className="text-green-500 mr-2" />
              Hotel accommodation
            </li>
            <li className="flex items-center">
              <IconCheck size={24} className="text-green-500 mr-2" />
              Private air-conditioned car with driver
            </li>
            <li className="flex items-center">
              <IconCheck size={24} className="text-green-500 mr-2" />
              All sightseeing with private local guides
            </li>
            <li className="flex items-center">
              <IconCheck size={24} className="text-green-500 mr-2" />
              Driver allowances & fuel charges
            </li>
            <li className="flex items-center">
              <IconCheck size={24} className="text-green-500 mr-2" />
              Personal care and attention
            </li>
            <li className="flex items-center">
              <IconCheck size={24} className="text-green-500 mr-2" />
              All currently applicable taxes
            </li>
          </ul>

          {/* Excluded Section */}
          <h3 className="text-2xl font-semibold mb-4">Excluded</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <IconX size={24} className="text-red-500 mr-2" />
              Flights to/from destination
            </li>
            <li className="flex items-center">
              <IconX size={24} className="text-red-500 mr-2" />
              Travel insurance
            </li>
            <li className="flex items-center">
              <IconX size={24} className="text-red-500 mr-2" />
              Entrance fees to certain landmarks
            </li>
            <li className="flex items-center">
              <IconX size={24} className="text-red-500 mr-2" />
              Meals not mentioned in the itinerary
            </li>
          </ul>
        </div>

        {/* Right (Booking Section) */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full">
          <h2 className="text-2xl font-semibold mb-4">Book Your Ticket</h2>
          <form className="flex flex-col gap-4">
            <label>
              <strong>Your Name:</strong>
              <input
                type="text"
                className="w-full mt-2 p-2 border rounded-md"
                placeholder="Enter your name"
                required
              />
            </label>

            <label>
              <strong>Email Address:</strong>
              <input
                type="email"
                className="w-full mt-2 p-2 border rounded-md"
                placeholder="Enter your email"
                required
              />
            </label>

            <label>
              <strong>Phone Number:</strong>
              <input
                type="tel"
                className="w-full mt-2 p-2 border rounded-md"
                placeholder="Enter your phone number"
                required
              />
            </label>

            <label>
              <strong>Number of Tickets:</strong>
              <input
                type="number"
                className="w-full mt-2 p-2 border rounded-md"
                placeholder="Enter number of tickets"
                required
              />
            </label>

            {/* Ticket Booking Button */}
            <button className="bg-orange-500 text-black py-3 px-6 rounded mt-4 hover:bg-orange-600 transition duration-300">
              Book Now
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default DetailsPage;
