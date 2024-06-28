"use client";
import axios from "axios";
import { BASE_URL } from "../config";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface PatchParams {
  prodId: string;
  size: string;
  action: "increment" | "decrement";
}

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
    return res.data;
  };
  const { mutate, error, isPending } = useMutation({
    mutationFn: onDelete,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: [`${collection}/${id}`] }),
  });

  return { mutate, error, isPending };
};

export const useRequestPatch = (collection: string, userId: string) => {
  const queryClient = useQueryClient();

  const onChangeSize = async ({ prodId, size, action }: PatchParams) => {
    const res = await axios.patch(`${BASE_URL}/${collection}/${userId}`, {
      prodId,
      size,
      action,
    });
    return res.data;
  };

  const { mutate, error, isPending } = useMutation({
    mutationFn: onChangeSize,
    onSuccess: (data, varibles) => {
      queryClient.invalidateQueries({ queryKey: [`${collection}/${userId}`] });
      queryClient.invalidateQueries({
        queryKey: [`${collection}/${userId}/${varibles.prodId}`],
      });
    },
  });

  return { mutate, error, isPending };
};
