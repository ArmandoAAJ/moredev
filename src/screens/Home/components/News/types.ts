export interface Props {
  products: Products[];
  onPress: (id: number) => void
}

type Products = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
  title: string;
};
