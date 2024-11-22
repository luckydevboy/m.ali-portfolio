import { Fetcher } from "swr";
import { Work, Response } from "@/types";

export const fetchWorks: Fetcher<Response<Work[]>> = async (url: string) => {
  const res = await fetch(url, {
    headers: {
      Authorization: process.env.NEXT_PUBLIC_TOKEN!,
    },
  });

  return res.json();
};
