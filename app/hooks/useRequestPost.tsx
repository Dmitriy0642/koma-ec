"use client";
import axios from "axios";
import { BASE_URL } from "../config";
import { useMutation } from "@tanstack/react-query";

export const useRequestPost = (collection: string, id: string, data: any) => {
  const fetchData = async () => {
    const response = await axios.post(`${BASE_URL}/${collection}/${id}`, data);
    return response;
  };
  const { mutate, error, isPending } = useMutation({
    mutationFn: fetchData,
  });
  return { mutate, error, isPending };
};
