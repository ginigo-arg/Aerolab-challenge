import useSWR from "swr";
import { User } from "../components/types";
import { getUser } from "../pages/api/api";

const fetcher = () => getUser();

export const useUser = () => {
  const { data, error } = useSWR(process.env.NEXT_PUBLIC_API_URL_USER, fetcher);

  return {
    user: data as User,
    isLoading: !error && !data,
    error: error,
  };
};
