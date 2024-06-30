"use client";
import axios from "axios";
import { BASE_URL } from "../config";
import { useQuery } from "@tanstack/react-query";
import { getCookieValue } from "../util/cookiesMatcher";

export const useRequestById = (collection: string, id: string) => {
  const fetchData = async () => {
    if (id.length !== 0) {
      const uId = getCookieValue();
      console.log(uId);
      console.log(id);

      const { data } = await axios.get(`${BASE_URL}/${collection}/${id}`);
      return data;
    }
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: [`${collection}/${id}`],
    queryFn: fetchData,
  });

  return { data, isLoading, isError };
};
