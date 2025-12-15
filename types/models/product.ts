export type Rating = {
  rate: number;
  count: number;
};

export type Product = {
  id: number;
  title: string;
  images: string[];
  price: number;
  rating?: Rating;
};
