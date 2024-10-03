"use client";
import { useState } from "react";
import { IconChevronDown } from "@tabler/icons-react";
import Link from "next/link";

type LinkItem = {
  link: string;
  label: string;
  links?: { link: string; label: string }[];
};

const links: LinkItem[] = [
  { link: "/tours", label: "Tours" },
  { link: "/blogs", label: "Blog" },
  { link: "/about", label: "About" },
  { link: "/contact", label: "Contact" },
  {
    link: "#2",
    label: "Support",
    links: [
      { link: "/faq", label: "FAQ" },
      { link: "/terms", label: "Privacy" },
    ],
  },
];

export default function HeaderMenu() {
  const [menuOpened, setMenuOpened] = useState(false);
  const [subMenuOpened, setSubMenuOpened] = useState<string | null>(null);

  const toggleMenu = () => setMenuOpened(!menuOpened);

  const toggleSubMenu = (label: string) => {
    setSubMenuOpened(subMenuOpened === label ? null : label);
  };

  const items = links.map((link) => {
    const subMenuItems = link.links?.map((subLink) => (
      <Link
        key={subLink.label}
        href={subLink.link}
        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-700"
      >
        {subLink.label}
      </Link>
    ));

    if (subMenuItems) {
      return (
        <div key={link.label} className="relative group">
          <button
            onClick={() => toggleSubMenu(link.label)}
            className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-100"
          >
            <span className="mr-2">{link.label}</span>
            <IconChevronDown size="0.9rem" stroke={1.5} />
          </button>
          {subMenuOpened === link.label && (
            <div className="absolute left-0 z-30 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
              {subMenuItems}
            </div>
          )}
        </div>
      );
    }

    return (
      <Link
        key={link.label}
        href={link.link}
        className="px-4 py-2 text-gray-700 hover:bg-gray-100/20 rounded-xl dark:text-gray-100 dark:hover:bg-gray-700"
      >
        {link.label}
      </Link>
    );
  });

  return (
    <header className="h-14 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 flex justify-between items-center h-full">
        <Link href="/" className="text-xl font-bold text-gray-800 dark:text-gray-200">
          Explorer
        </Link>
        <nav className="hidden sm:flex space-x-4">{items}</nav>
        <button
          className="sm:hidden text-gray-700 dark:text-gray-100 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpened ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
        {menuOpened && (
          <nav className="absolute top-14 left-0 w-full bg-white dark:bg-gray-900 shadow-lg sm:hidden z-30">
            <div className="flex flex-col space-y-2 p-4">{items}</div>
          </nav>
        )}
      </div>
    </header>
  );
}
