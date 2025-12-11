import { ProductBadgeType } from "../enums/ProductBadgeType";
import { ProductShippingType } from "../enums/ProductShippingType";

export type Product = {
  id: number;
  title: string;
  images: number[];
  price: number;
  sales: number;
  discount: number;
  badge: ProductBadgeType;
  shipping: ProductShippingType;
};
