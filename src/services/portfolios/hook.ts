import useSWRInfinite from "swr/infinite";
import { fetchPortfolios } from ".";

export const usePortfolios = () => {
  const { data, error, isLoading, size, setSize, isValidating } =
    useSWRInfinite(
      (index) =>
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/portfolios?populate=*&pagination[page]=${index + 1}&pagination[pageSize]=1`,
      fetchPortfolios,
    );

  const page = data?.[data?.length - 1].meta.pagination.page;
  const pageCount = data?.[data?.length - 1].meta.pagination.pageCount;

  const hasMore = page && pageCount && page < pageCount;

  return {
    data,
    error,
    isLoading,
    size,
    setSize,
    hasMore,
    isValidating,
  };
};
