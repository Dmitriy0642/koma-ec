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

interface CartItem {
  prodId: string;
  name: string;
  price: number;
  sizes: SizeWithQuantity[];
  image: string[];
  _id: string;
}

interface SizeWithQuantity {
  size: string;
  value: number;
}
