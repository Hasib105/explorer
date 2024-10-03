"use client";

import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div className=" py-12 ">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Privacy Policy
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Your privacy is important to us. This privacy policy explains how we
          collect, use, and protect your personal information.
        </p>
      </section>

      {/* Policy Content */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            1. Information We Collect
          </h2>
          <p className="text-gray-600 mb-4">
            We collect personal information that you voluntarily provide to us
            when you register on the website, make a booking, or contact us for
            customer support. This may include your name, email address, phone
            number, and payment information.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-600 mb-4">
            We use the information we collect to provide and improve our
            services, process bookings, send important notifications, and
            respond to your inquiries. Your data may also be used to personalize
            your experience on our website.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            3. Sharing Your Information
          </h2>
          <p className="text-gray-600 mb-4">
            We do not share your personal information with third parties except
            as required by law or to facilitate your travel arrangements (such
            as sharing your details with airlines, hotels, or tour operators).
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            4. Data Security
          </h2>
          <p className="text-gray-600 mb-4">
            We take reasonable precautions to protect your personal information
            from unauthorized access, use, or disclosure. However, no data
            transmission over the Internet is completely secure, and we cannot
            guarantee the absolute security of your data.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            5. Your Rights
          </h2>
          <p className="text-gray-600 mb-4">
            You have the right to access, correct, or delete your personal
            information. If you would like to exercise these rights, please
            contact us at privacy@yourtravelwebsite.com.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            6. Changes to This Policy
          </h2>
          <p className="text-gray-600 mb-4">
            We may update this privacy policy from time to time. Any changes
            will be posted on this page with an updated revision date. We
            encourage you to review this policy periodically to stay informed
            about how we protect your information.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
