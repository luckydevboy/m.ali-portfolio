"use client";

import Image from "next/image";
import Link from "next/link";
import { useWorks } from "@/services/works/hook";

export default function Home() {
  const { data, error, size, setSize, hasMore, isValidating } = useWorks(true);

  const works = data?.flatMap((item) => item.data);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {works?.map((portfolio) => {
          return (
            <Link
              key={portfolio.id}
              className="relative w-full h-[calc(100vw)] lg:h-[calc(50vw)] lg:max-h-[500px] group"
              href={`/portfolio/${portfolio.documentId}`}
            >
              <div
                className="hidden absolute bg-white/90 inset-5 z-10 group-hover:flex flex-col
               items-center justify-center"
              >
                <p>{portfolio.date.split("-")[0]}</p>
                <h2 className="text-xl font-medium">{portfolio.title}</h2>
              </div>
              {/* TODO: handle pinned images*/}
              {/* TODO: handle LQIP method for images as loader */}
              <Image
                src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/${portfolio.images[0].url}`}
                alt={portfolio.title}
                fill
                objectFit="cover"
              />
            </Link>
          );
        })}
      </div>
      {hasMore && (
        <div className="flex items-center justify-center">
          <button
            className="bg-black hover:bg-black/80 text-white text-sm px-4
             py-2 my-4 flex items-center disabled:bg-black/30"
            disabled={isValidating}
            onClick={() => setSize(size + 1)}
          >
            {isValidating && (
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            )}
            Load more...
          </button>
        </div>
      )}
    </>
  );
}
