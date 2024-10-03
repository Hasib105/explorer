

import HeroSection from "../app/component/Hero";
import FeatureSection from "./component/Feature";
import TourGrid from "./component/Tourgrid";
import { ImageActionBanner } from "./component/ImageBanner";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen space-y-8">
            <div>
                <HeroSection />
                <FeatureSection />
            </div>
            <TourGrid />
            <ImageActionBanner />

            <div className="py-8 md:py-16 px-6 sm:px-8 max-w-7xl mx-auto w-full">
                <h3 className="text-3xl font-semibold pb-6">
                    Our happy clients
                </h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((client) => (
                        <div
                            key={client}
                            className="rounded-xl p-4 md:p-8 flex flex-col gap-4 md:gap-6 border border-gray-300  bg-slate-50 shadow-sm">
                            <div className="flex gap-4 items-center">
                                <div className="size-20 rounded-full bg-orange-400"></div>
                                <div className="space-y-6 ">
                                    <h4 className="text-lg font-semibold ml-1">
                                        {"Client " + client}
                                    </h4>
                                    <span>⭐⭐⭐⭐⭐</span>
                                </div>
                            </div>
                            <p className="line-clamp-5 text-gray-600">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Officiis corrupti ratione,
                                ipsam ducimus ipsa eligendi, rerum veniam
                                inventore totam, ab ea! Provident tempore quae,
                                pariatur ab debitis accusantium dicta molestiae?
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="py-8 md:py-16 px-6 sm:px-8 max-w-7xl mx-auto w-full">
                <div className="rounded-3xl border border-gray-200 w-full grid md:grid-cols-2 overflow-hidden">
                    <div className="h-60 md:h-80 w-full relative bg-[url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80')] bg-center"></div>
                    <div className="h-60 md:h-80 w-full flex items-center justify-center flex-col text-center">
                        <div className="space-y-4">
                            <h4 className="text-3xl md:text-5xl font-bold max-w-md mx-auto">
                                Get special offers and secret deals
                            </h4>
                            <p className="text-gray-600 max-w-xs text-lg mx-auto">
                                Give us a call and we&apos;ll arrange everything for
                                you. We&apos;re always happy to help.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
