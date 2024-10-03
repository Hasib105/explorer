"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import {
    IconMapPin,
    IconCalendar,
    IconTag,
    IconChevronLeft,
    IconChevronRight,
} from "@tabler/icons-react";
import card_img from "../assets/delhi.avif";
import Link from "next/link";

// Tour interface
interface Tour {
    id: number;
    image: StaticImageData; // Image type for imported static images
    title: string;
    rating: number;
    reviews: number;
    nights: number;
    days: number;
    price: number;
}

// Generating 30 tours dynamically
const tours: Tour[] = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    image: card_img,
    title: `Explore Destination ${i + 1}`,
    rating: Math.floor(Math.random() * 5) + 1,
    reviews: Math.floor(Math.random() * 50) + 1,
    nights: Math.floor(Math.random() * 10) + 1,
    days: Math.floor(Math.random() * 15) + 1,
    price: Math.floor(Math.random() * 50000) + 1000,
}));

// TourCard component
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
        <div className="bg-white rounded-lg shadow-lg overflow-hidden m-4 transition-transform duration-300 hover:shadow-xl">
            <div className="relative group">
                <Image
                    src={image}
                    alt={title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
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
                                index < rating
                                    ? "text-yellow-500"
                                    : "text-gray-300"
                            }`}>
                            ★
                        </span>
                    ))}
                    <span className="text-gray-500 ml-2 text-sm">
                        ({reviews} Review{reviews !== 1 ? "s" : ""})
                    </span>
                </div>
                <div className="mt-4 flex items-center text-gray-600">
                    <IconMapPin
                        size={20}
                        className="mr-2"
                    />
                    <span>{nights} Nights</span>
                </div>
                <div className="mt-2 flex items-center text-gray-600">
                    <IconCalendar
                        size={20}
                        className="mr-2"
                    />
                    <span>{days} Days</span>
                </div>
                <div className="mt-2 flex items-center text-gray-600">
                    <IconTag
                        size={20}
                        className="mr-2"
                    />
                    <span>from ₹{price.toLocaleString()}</span>
                </div>
            </div>
        </div>
    );
};

// Pagination controls component
const Pagination = ({
    currentPage,
    totalPages,
    onPageChange,
}: {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}) => {
    return (
        <div className="flex justify-center items-center mt-6 space-x-2">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 bg-orange-500 hover:bg-orange-600 rounded-full disabled:opacity-50">
                <IconChevronLeft size={24} />
            </button>
            <span className="text-gray-700">
                Page {currentPage} of {totalPages}
            </span>
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2 bg-orange-500 hover:bg-orange-600 rounded-full disabled:opacity-50">
                <IconChevronRight size={24} />
            </button>
        </div>
    );
};

// Main Service Page Component
const ServicePage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 12; // Number of cards to show per page

    const totalCards = tours.length;
    const totalPages = Math.ceil(totalCards / cardsPerPage);

    const onPageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const displayedTours = tours.slice(
        (currentPage - 1) * cardsPerPage,
        currentPage * cardsPerPage
    );

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
            {/* Header Section */}
            <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
                Our Services
            </h1>
            <p className="text-center text-lg text-gray-600 mb-12">
                Explore our exclusive range of tours designed to give you the
                best experiences across various destinations.
            </p>

            {/* Tour Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {displayedTours.map((tour) => (
                    <Link
                        href="/details"
                        key={tour.id}>
                        <TourCard {...tour} />
                    </Link>
                ))}
            </div>

            {/* Pagination Component */}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={onPageChange}
            />
        </div>
    );
};

export default ServicePage;
