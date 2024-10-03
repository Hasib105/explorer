import {
  IconInfinity, 
  IconPhoto, 
  IconShield, 
  IconAward, 
} from "@tabler/icons-react";

export default function FeatureSection() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 text-center">
        {/* Feature Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Ultimate Flexibility */}
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <IconInfinity className="h-12 w-12 text-orange-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">
              Ultimate Flexibility
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Experience flexible services tailored to your needs.
            </p>
          </div>

          {/* Memorable Experiences */}
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <IconPhoto className="h-12 w-12 text-orange-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">
              Memorable Experiences
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Create memories that will last a lifetime.
            </p>
          </div>

          {/* Quality at Our Core */}
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <IconShield className="h-12 w-12 text-orange-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">
              Quality at Our Core
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              We prioritize quality in every aspect of our services.
            </p>
          </div>

          {/* Award-Winning Support */}
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <IconAward className="h-12 w-12 text-orange-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">
              Award-Winning Support
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Our support team is recognized for excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
