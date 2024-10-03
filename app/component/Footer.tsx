import {
    IconBrandTwitter,
    IconBrandYoutube,
    IconBrandInstagram,
} from "@tabler/icons-react";

const data = [
    {
        title: "Service",
        link: "/tours",
    },
    {
        title: "About",
        link: "/about",
    },
    {
        title: "Contact",
        link: "/contact",
    },
    {
        title: "Blog",
        link: "/blogs",
    },
];

export const FooterLinks = () => {
    return (
        <footer className="bg-gray-100 dark:bg-gray-900 mt-16 pt-10 pb-10 border-t border-gray-300 dark:border-gray-700">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center px-12">
                {/* Logo and description */}
                <div className="max-w-xs mb-6 md:mb-0">
                    <div className="flex items-center space-x-2">
                        <div className="bg-orange-600 w-8 h-8 rounded-full"></div>{" "}
                        <span className="text-lg font-bold text-gray-800 dark:text-white">
                            Explorer
                        </span>
                    </div>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                        Book your next trip with Explorer, a travel website that
                        helps you discover and book unique experiences around
                        the world.
                    </p>
                </div>

                {/* Links sections */}
                <div className="flex flex-wrap justify-between md:space-x-10">
                    {data.map((group) => (
                        <div
                            key={group.title}
                            className="mb-6 md:mb-0">
                            <h4 className="text-lg font-bold text-gray-900 dark:text-gray-200">
                                {group.title}
                            </h4>
                            <ul className="mt-2 space-y-1">
                                <li>
                                    <a
                                        href={group.link}
                                        className="text-gray-600 dark:text-gray-400 hover:underline">
                                        {group.title}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Social and Copyright */}
            <div className=" border-t border-gray-300 dark:border-gray-700 mt-8 pt-6 px-4 flex justify-between items-center">
                <div className="container mx-auto flex justify-between items-center">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        © 2024 Explorer. All rights reserved.
                    </p>

                    <div className="flex space-x-4">
                        <a
                            href="#"
                            className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white">
                            <IconBrandTwitter size={20} />
                        </a>
                        <a
                            href="#"
                            className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white">
                            <IconBrandYoutube size={20} />
                        </a>
                        <a
                            href="#"
                            className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white">
                            <IconBrandInstagram size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
