"use client";

import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <header className="relative py-7 px-5">
      <h1 className="text-lg sm:text-2xl font-bold text-center">
        Mohammad Ali Ghasemi
      </h1>
      <MenuIcon
        className="h-6 w-6 absolute right-5 top-1/2 -translate-y-1/2"
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      />

      {menuIsOpen && (
        <nav className="fixed inset-0 z-10 bg-white">
          <XIcon
            className="absolute right-5 top-7"
            onClick={() => setMenuIsOpen(false)}
          />
          <h2 className="text-center mt-12 text-2xl mb-8">Work</h2>
          <ul className="flex flex-col gap-y-6 text-center">
            <li>
              <Link href="/project-1">Project 1</Link>
            </li>
            <li>
              <Link href="/project-2">Project 2</Link>
            </li>
            <li>
              <Link href="/project-3">Project 3</Link>
            </li>
            <hr />
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <hr />
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
