"use client";

import Link from "next/link";
import { useWorks } from "@/services/works/hook";

type Props = {
  className?: string;
};

const SideMenu = ({ className }: Props) => {
  const { data } = useWorks();

  const works = data?.flatMap((item) => item.data);

  return (
    <aside className={`text-center px-4 py-12 ${className}`}>
      <h1 className="font-bold text-3xl font-poppins text-primary">
        <Link href="/">{"Mohammad Ali Ghasemi".toUpperCase()}</Link>
      </h1>
      <h2 className="mt-12 mb-5 text-sm font-bold text-secondary font-poppins">
        {"Work".toUpperCase()}
      </h2>
      <div className="space-y-4 mb-12">
        {works?.map((work) => (
          <div key={work.documentId}>
            <Link
              className="font-nunito-sans text-base text-tertiary hover:text-primary transition-colors"
              href={`/work/${work.documentId}`}
            >
              {work.title}
            </Link>
          </div>
        ))}
      </div>
      <Link
        href="/about"
        className="block font-nunito-sans text-tertiary text-base mb-4 hover:text-primary transition-colors"
      >
        About
      </Link>
      <Link
        href="/contact"
        className="block font-nunito-sans text-tertiary text-base hover:text-primary transition-colors"
      >
        Contact
      </Link>
    </aside>
  );
};

export default SideMenu;
