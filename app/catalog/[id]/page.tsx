"use client";
import React from "react";
import Product from "@/app/components/Product";
import { useRequest } from "@/app/hooks/useRequest";
import Loader from "@/app/components/Loader";

const page = ({ params }: { params: { id: string } }) => {
  const { data, isLoading, isError } = useRequest("products");
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="wrapper_product">
      <Product id={params.id} prods={data} />
    </div>
  );
};

export default page;
