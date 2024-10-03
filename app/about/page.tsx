"use client";

import { IconHeart, IconTarget, IconUsers } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Link from "next/link";

const AboutUs = () => {
  // Animation Variants for Framer Motion
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Staggering the cards
      },
    },
  };

  return (
    <div className="bg-gray-50 py-12">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Explore the World with Us
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          At our travel agency, we craft unforgettable journeys that connect you
          with new cultures, breathtaking landscapes, and unique experiences.
          Whether you&rsquo;re seeking adventure, relaxation, or cultural exploration,
          we&rsquo;re here to help you discover the wonders of the world.
        </p>
      </section>

      {/* Core Values Section with Motion */}
      <motion.section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Our Travel Philosophy
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            variants={cardVariants}
          >
            <IconHeart size={48} className="text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Passion for Travel
            </h3>
            <p className="text-gray-600">
              We are driven by our love for exploration and discovery, committed
              to creating journeys that inspire and enrich the soul.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            variants={cardVariants}
          >
            <IconTarget size={48} className="text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Visionary Destinations
            </h3>
            <p className="text-gray-600">
              We aim to offer unique, off-the-beaten-path destinations that open
              new horizons for our travelers and shape unforgettable
              experiences.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            variants={cardVariants}
          >
            <IconUsers size={48} className="text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Community & Culture
            </h3>
            <p className="text-gray-600">
              We believe in fostering connections—between people, cultures, and
              the planet. Our trips are designed to bring people together and
              leave lasting positive impacts.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Team Section with Framer Motion Animation */}
      <section className="bg-white py-12">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Meet Our Travel Experts
        </h2>
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              name: "John Doe",
              role: "Founder & Adventure Enthusiast",
              description:
                "John’s love for adventure led him to create a company that brings unique travel experiences to explorers around the globe.",
            },
            {
              name: "Jane Smith",
              role: "Head of Travel Design",
              description:
                "Jane curates each journey with a focus on personalized experiences that reflect her passion for world culture and design.",
            },
            {
              name: "David Wilson",
              role: "Chief Travel Architect",
              description:
                "David’s expertise lies in crafting intricate travel itineraries, ensuring that every trip is a once-in-a-lifetime adventure.",
            },
          ].map((member, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-lg text-center"
              variants={cardVariants}
            >
              <img
                src="https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg"
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.role}</p>
              <p className="mt-4 text-gray-500">{member.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-zinc-800 text-white py-16 w-2/3 mx-auto mt-5 rounded">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Embark on Your Next Journey
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            Whether you&rsquo;re a seasoned traveler or just getting started, we&rsquo;re
            here to help you explore the world in new and exciting ways. Ready
            to start your adventure?
          </p>
          <Link
            href="/contact"
            className="bg-orange-500   text-black py-3 px-4 rounded-lg hover:bg-orange-600 transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
