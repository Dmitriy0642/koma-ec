"use client";
import axios from "axios";
import { BASE_URL } from "../config";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useRequestPost = (collection: string, id: string, prod: any) => {
  const queryClient = useQueryClient();
  const fetchData = async () => {
    const res = await axios.post(`${BASE_URL}/${collection}/${id}`, prod);
    return res.status;
  };
  const { mutate, error, isPending } = useMutation({
    mutationFn: fetchData,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: [`${collection}/${id}`] }),
  });

  return { mutate, error, isPending };
};

export const useRequestDelete = (
  collection: string,
  id: string,
  prodId: string
) => {
  const queryClient = useQueryClient();
  const onDelete = async () => {
    const res = await axios.delete(`${BASE_URL}/${collection}/${id}`, {
      data: { prodId },
    });
    return res;
  };
  const { mutate, error, isPending } = useMutation({
    mutationFn: onDelete,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: [`${collection}/${id}`] }),
  });

  return { mutate, error, isPending };
};
