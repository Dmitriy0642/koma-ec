"use client";
import axios from "axios";
import { BASE_URL } from "../config";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface PatchParams {
  prodId: string;
  size: string;
  action: "increment" | "decrement";
}

export const useRequestPost = (collection: string, prod: any) => {
  const queryClient = useQueryClient();
  const fetchData = async () => {
    const res = await axios.post(`${BASE_URL}/${collection}`, prod);
    return res.status;
  };
  const { mutate, error, isPending } = useMutation({
    mutationFn: fetchData,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: [`${collection}`] }),
  });

  return { mutate, error, isPending };
};

export const useRequestDelete = (collection: string, prodId: string) => {
  const queryClient = useQueryClient();
  const onDelete = async () => {
    const res = await axios.delete(`${BASE_URL}/${collection}`, {
      data: { prodId },
    });
    return res.data;
  };
  const { mutate, error, isPending } = useMutation({
    mutationFn: onDelete,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: [`${collection}`] }),
  });

  return { mutate, error, isPending };
};

export const useRequestPatch = (collection: string, uId: string) => {
  const queryClient = useQueryClient();

  const onChangeSize = async ({ prodId, size, action }: PatchParams) => {
    const res = await axios.patch(`${BASE_URL}/${collection}/${uId}`, {
      prodId,
      size,
      action,
    });
    return res.data;
  };

  const { mutate, error, isPending } = useMutation({
    mutationFn: onChangeSize,
    onSuccess: (data, varibles) => {
      queryClient.invalidateQueries({ queryKey: [`${collection}`] });
      queryClient.invalidateQueries({
        queryKey: [`${collection}/${varibles.prodId}`],
      });
    },
  });

  return { mutate, error, isPending };
};
