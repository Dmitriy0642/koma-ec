"use client";
import axios from "axios";
import { BASE_URL } from "../config";
import { useQuery } from "@tanstack/react-query";

export const useRequest = (collection: string) => {
  const fetchData = async () => {
    const { data } = await axios.get(`${BASE_URL}/${collection}`);
    return data;
  };
  const { data, isLoading, isError } = useQuery({
    queryKey: [`${collection}`],
    queryFn: fetchData,
  });
  return { data, isLoading, isError };
};

export const useRequestCart = (collection: string) => {};
