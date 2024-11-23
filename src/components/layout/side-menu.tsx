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
      <h1 className="font-bold text-2xl">Mohammad Ali Ghasemi</h1>
      <h2 className="mt-8 mb-4 text-lg font-medium">Works</h2>
      <div className="flex flex-col gap-y-4">
        {works?.map((work) => (
          <Link key={work.documentId} href={`/work/${work.documentId}`}>
            {work.title}
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default SideMenu;
