import useSWRInfinite from "swr/infinite";
import { fetchWorks } from ".";

export const useWorks = (populated: boolean = false) => {
  const { data, error, isLoading, size, setSize, isValidating } =
    useSWRInfinite(
      (index) =>
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/works?
        pagination[page]=${index + 1}&pagination[pageSize]=25
        ${populated ? "&populate=*" : ""}`,
      fetchWorks,
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
