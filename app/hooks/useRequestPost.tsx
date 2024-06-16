"use client";
import axios from "axios";
import { BASE_URL } from "../config";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useRequestPost = (collection: string, id: string, prod: any) => {
  const queryClient = useQueryClient();
  const fetchData = async () => {
    const res = await axios.post(`${BASE_URL}/${collection}/${id}`, prod);
    if (res.status === 200) {
      return toast.success("Товар Успешно добавлен");
    } else if (res.status === 220) {
      toast.error("На складе , больше нет данного размера");
    }
  };
  const { mutate, error, isPending } = useMutation({
    mutationFn: fetchData,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: [`${collection}/${id}`] }),
  });

  return { mutate, error, isPending };
};
