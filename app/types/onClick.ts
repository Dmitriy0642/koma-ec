interface onClickProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  filter: {
    category: string[];
    subcategory: string[];
    brands: string[];
  };
}

interface Filters {
  category: string[];
  subcategory: string[];
  brands: string[];
}

interface SortingButtonsProps {
  data: string[];
}
