"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { IconPlus, IconMinus } from "@tabler/icons-react";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const questions = [
    {
      question: "What documents do I need to travel internationally?",
      answer:
        "You typically need a valid passport, a visa (if required), and any additional documents depending on your destination.",
    },
    {
      question: "How can I change or cancel my booking?",
      answer:
        "You can change or cancel your booking by logging into your account or contacting our customer service team.",
    },
    {
      question: "Are there any luggage restrictions?",
      answer:
        "Luggage restrictions vary by airline. Please check with your airline for specific policies regarding weight and size limits.",
    },
    {
      question: "What should I do if I miss my flight?",
      answer:
        "If you miss your flight, contact your airline immediately for assistance with rebooking options.",
    },
    {
      question: "Is travel insurance necessary?",
      answer:
        "While it is not mandatory, travel insurance is highly recommended to protect against unforeseen events such as cancellations or medical emergencies.",
    },
    {
      question: "Can I book flights and hotels together?",
      answer:
        "Yes! We offer package deals that allow you to book flights and hotels together for better savings.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept major credit cards, debit cards, and PayPal for your convenience during the checkout process.",
    },

  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className=" py-12">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>

        {questions.map((item, index) => (
          <div key={index} className="border-b border-gray-300 mb-4">
            <div
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center py-4 cursor-pointer"
            >
              <h3 className="text-lg font-semibold">{item.question}</h3>
              {activeIndex === index ? (
                <IconMinus size={24} className="text-orange-500" />
              ) : (
                <IconPlus size={24} className="text-orange-500" />
              )}
            </div>
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: activeIndex === index ? 1 : 0,
                height: activeIndex === index ? "auto" : 0,
              }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              {activeIndex === index && (
                <p className="text-gray-600 pb-4">{item.answer}</p>
              )}
            </motion.div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default FAQSection;
