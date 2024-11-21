"use client";

import { usePortfolios } from "@/services/portfolios/hook";

export default function Home() {
  const { data, error, isLoading, size, setSize } = usePortfolios();

  const issues = data?.flatMap((item) => item.data);
  console.log(issues);

  return (
    <>
      <button onClick={() => setSize(size + 1)}>Load More</button>
    </>
  );
}
