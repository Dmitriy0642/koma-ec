import React, { useState } from "react";
import { useRequest } from "../hooks/useRequest";
import Loader from "./Loader";

const List: React.FC = () => {
  const { data, isLoading, isError } = useRequest("brands");
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    console.log(isError);
  }

  const handleMouseEnter = (id: string) => {
    setHoveredIndex(id);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <section className="list_first">
      <ul className="ul_list_first">
        {data.map((item: { name: string; _id: string }) => (
          <li
            className="item_firm"
            key={item._id}
            onMouseEnter={() => handleMouseEnter(item._id)}
            onMouseLeave={handleMouseLeave}
          >
            {item.name}
            {hoveredIndex === item._id && (
              <span className="hover-text">go to catalog</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default List;
