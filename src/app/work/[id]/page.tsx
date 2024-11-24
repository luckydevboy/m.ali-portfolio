"use client";

import { useParams } from "next/navigation";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { useWork } from "@/services/works/hook";
import Image from "next/image";

const Work = () => {
  const { id } = useParams();
  const { data } = useWork(id as string);

  const work = data?.data;

  return (
    <div className="mt-8 lg:mt-16">
      <h1 className="mb-6 font-poppins text-center text-primary text-2xl lg:text-5xl">
        {work?.title}
      </h1>
      <div className="max-w-[800px] mx-auto mb-12 px-5 font-nunito-sans text-center text-tertiary text-sm lg:text-lg">
        {work && <BlocksRenderer content={work.description} />}
      </div>
      <div className="space-y-4 lg:space-y-8">
        {work?.images.map((image) => (
          <div
            key={image.documentID}
            className="relative w-full h-[calc(100vw)] lg:h-[calc(50vw)]"
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/${image.url}`}
              alt={image.name}
              fill
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
