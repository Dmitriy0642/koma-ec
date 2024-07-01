"use client";
import axios from "axios";
import { BASE_URL } from "../config";
import { useQuery } from "@tanstack/react-query";

export const useRequestById = (collection: string, id: string) => {
  const fetchData = async () => {
    if (id.length !== 0) {
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

export const useRequestByIdCart = (collection: string, id: string) => {
  const fetchDataCart = async () => {
    if (id.length !== 0) {
      const { data } = await axios.get(`${BASE_URL}/${collection}/${id}`);
      return data;
    }
  };
  const { data, isLoading, isError } = useQuery({
    queryKey: [`${collection}/${id}`],
    queryFn: fetchDataCart,
  });

  return { data, isLoading, isError };
};
