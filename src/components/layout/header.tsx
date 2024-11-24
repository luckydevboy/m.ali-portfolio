"use client";

import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { useWorks } from "@/services/works/hook";

type Props = {
  className?: string;
};

const Header = ({ className }: Props) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { data } = useWorks();

  const works = data?.flatMap((item) => item.data);

  return (
    <header className={`relative py-7 px-5 ${className}`}>
      <h1 className="text-lg sm:text-2xl font-bold text-center font-poppins">
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
          <h2 className="text-center mt-12 text-2xl mb-8 font-poppins">Work</h2>
          <ul className="flex flex-col gap-y-6 text-center font-nunito-sans">
            {works?.map((work) => (
              <li key={work.documentId}>
                <Link
                  href={`/work/${work.documentId}`}
                  onClick={() => setMenuIsOpen(false)}
                >
                  {work.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
