"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";
import { IconPhone, IconMail, IconMapPin } from "@tabler/icons-react"; // Import Tabler icons

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // Handle form submission (send data)
    console.log(data);
    reset(); // Reset form after submission
  };

  // Animation effect (framer-motion)
  const slideUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="max-w-7xl mx-auto my-20 px-4 sm:px-6 lg:px-8">
      {/* Contact Info */}
      <motion.div
        className="mb-12 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        variants={slideUpVariants}
      >
        <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
        <div className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-12">
          <div className="flex items-center justify-center space-x-3">
            <IconPhone className="text-orange-500" size={24} />
            <span className="text-lg font-medium">+123-456-7890</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <IconMail className="text-orange-500" size={24} />
            <span className="text-lg font-medium">info@example.com</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <IconMapPin className="text-orange-500" size={24} />
            <span className="text-lg font-medium">123 Main St, City</span>
          </div>
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        className="w-full max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6 sm:p-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        variants={slideUpVariants}
      >
        <h2 className="text-2xl font-bold text-center mb-6">Get in Touch</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              className={`mt-1 p-2 w-full border rounded-md ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Your name"
              {...register("name", {
                required: "Name is required",
                minLength: 2,
              })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                Name must be at least 2 characters
              </p>
            )}
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className={`mt-1 p-2 w-full border rounded-md ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Subject Input */}
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700"
            >
              Subject
            </label>
            <input
              id="subject"
              type="text"
              className={`mt-1 p-2 w-full border rounded-md ${
                errors.subject ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Subject"
              {...register("subject", { required: "Subject is required" })}
            />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">Subject is required</p>
            )}
          </div>

          {/* Message Input */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              className={`mt-1 p-2 w-full border rounded-md ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Your message"
              rows={4}
              {...register("message", {
                required: "Message is required",
                minLength: 10,
              })}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                Message must be at least 10 characters long
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-black text-sm py-2 px-4 rounded shadow"
            >
              Send Message
            </button>
          </div>
        </form>
      </motion.div>

      {/* Map Section */}
      <motion.div
        className="mt-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        variants={slideUpVariants}
      >
        <h2 className="text-2xl font-bold text-center mb-6">Our Location</h2>
        <div className="w-full h-64">
          <iframe
            className="w-full h-full border rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.2885248882187!2d-122.08424968469277!3d37.42199997982579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5cfd9478e5f%3A0x18c30361dbbe6f26!2sGoogleplex!5e0!3m2!1sen!2sus!4v1640309054588!5m2!1sen!2sus"
            loading="lazy"
          ></iframe>
        </div>
      </motion.div>
    </section>
  );
}
