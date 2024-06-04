import React from "react";
import { useRequest } from "../hooks/useRequest";
import Loader from "./Loader";

const List: React.FC = () => {
  const { data, isLoading, isError } = useRequest("brands");

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    console.log(isError);
  }

  return (
    <section className="list_first">
      <ul className="ul_list_first">
        {data.map((item: { name: string; _id: string }) => (
          <li className="item_firm" key={item._id}>
            {item.name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default List;
