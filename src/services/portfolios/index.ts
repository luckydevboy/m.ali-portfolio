import { Fetcher } from "swr";
import { Portfolio, Response } from "@/types";

export const fetchPortfolios: Fetcher<Response<Portfolio[]>> = async (
  url: string,
) => {
  const res = await fetch(url, {
    headers: {
      Authorization: process.env.NEXT_PUBLIC_TOKEN!,
    },
  });

  return res.json();
};
