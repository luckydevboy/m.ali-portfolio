import useSWRInfinite from "swr/infinite";
import { fetchPortfolios } from ".";

export const usePortfolios = () => {
  const { data, error, isLoading, size, setSize } = useSWRInfinite(
    (index) =>
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/portfolios?
      populate=*&pagination[page]=${index + 1}
      &pagination[pageSize]=25`,
    fetchPortfolios,
  );

  return {
    data,
    error,
    isLoading,
    size,
    setSize,
  };
};
