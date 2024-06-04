interface onClickProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  filter: {
    gender: string[];
    category: string[];
    subcategory: string[];
    brands: string[];
  };
}

interface Filters {
  gender: string[];
  category: string[];
  subcategory: string[];
  brands: string[];
}

interface SortingButtonsProps {
  data: string[];
}
