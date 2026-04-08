import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-primary text-white relative">
      <div className="flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-extrabold">
          Next <span className="text-xl text-secondary font-bold">Blogs</span>
        </h1>

        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.path}>
              <span className="hover:text-secondary cursor-pointer transition">
                {link.name}
              </span>
            </Link>
          ))}
        </nav>
        <Bars3Icon
          className="w-6 h-6 md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute right-0.5 bg-primary border border-muted rounded-lg w-30 text-center space-y-3 transition-all duration-300 
            ${isOpen ? "block" : "hidden"}`}
      >
        {navLinks.map((link) => (
          <Link key={link.name} href={link.path}>
            <div
              onClick={() => setIsOpen(false)}
              className="block py-2  hover:text-secondary cursor-pointer"
            >
              {link.name}
            </div>
          </Link>
        ))}
      </div>
    </header>
  );
}
