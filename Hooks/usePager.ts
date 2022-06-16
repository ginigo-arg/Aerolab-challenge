import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const userPage = () => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const router = useRouter();
  const { page } = router.query;

  useEffect(() => {
    if (page) setPageNumber(Number(page));
  });

  const handleNextPage = () => {
    router.push(`/?page=${pageNumber + 1}`, undefined, { scroll: false });
  };
  const handlePrevPage = () => {
    router.push(`/?page=${pageNumber - 1}`, undefined, { scroll: false });
  };
  const handleNavigate = (page: number) => {
    router.push(`/?page=${page}`, undefined, { scroll: false });
  };

  return { page: pageNumber, handleNextPage, handlePrevPage, handleNavigate };
};
