"use client";
import axios from "axios";
import { BASE_URL } from "../config";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

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
  const queryClient = useQueryClient();

  const fetchDataCart = async () => {
    if (id.length === 0) {
      return { items: [] };
    } else {
      const { data } = await axios.get(`${BASE_URL}/${collection}/${id}`);
      return data;
    }
  };
  const { data, isLoading, isError } = useQuery({
    queryKey: [`${collection}/${id}`],
    queryFn: fetchDataCart,
    enabled: id.length !== 0 || id !== null || id !== undefined,
  });

  useEffect(() => {
    fetchDataCart();
  }, [id]);

  return { data, isLoading, isError };
};
