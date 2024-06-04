import React from "react";

const SortingGender: React.FC<onClickProps> = ({ onClick, filter }) => {
  return (
    <div className="select_block">
      <button
        className={
          filter.gender.includes("For Him")
            ? "button_select_active"
            : "button_select"
        }
        id="For Him"
        onClick={onClick}
      >
        for him
      </button>
      <button
        className={
          filter.gender.includes("For Her")
            ? "button_select_active"
            : "button_select"
        }
        id="For Her"
        onClick={onClick}
      >
        for her
      </button>
    </div>
  );
};

export default SortingGender;
