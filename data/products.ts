import { ProductBadgeType } from "@/types/enums/ProductBadgeType";
import { ProductShippingType } from "@/types/enums/ProductShippingType";

export const products = [
  {
    id: 1,
    title: "Bota Coturno SLZ Adventure Promoção",
    images: [
      require("../assets/images/productImages/product1Image1.jpeg"),
    ],
    price: 59.90,
    sales: 8200,
    discount: 0.40,
    badge: ProductBadgeType.INDICATE,
    shipping: ProductShippingType.NATIONAL,
  },
  {
    id: 2,
    title: "Lenovo GM2 PRO Fone de ouvido para jogos de baixa latência",
    images: [
      require("../assets/images/productImages/product2Image1.jpeg"),
    ],
    price: 46.90,
    sales: 5600,
    discount: 0.33,
    badge: ProductBadgeType.OFICIAL,
    shipping: ProductShippingType.INTERNATIONAL,
  },
  {
    id: 3,
    title: "H'maston SN15 Fone de ouvido Bluetooth sem fio montado na cabeça",
    images: [
      require("../assets/images/productImages/product3Image1.jpg"),
      require("../assets/images/productImages/product3Image2.jpg"),
      require("../assets/images/productImages/product3Image3.jpg"),
    ],
    price: 105.99,
    sales: 491,
    discount: 0.47,
    badge: ProductBadgeType.OFICIAL,
    shipping: ProductShippingType.NATIONAL,
  },
  {
    id: 4,
    title: "Cafeteira Expresso Dolce Gusto Genio S Plus",
    images: [
      require("../assets/images/productImages/product4Image1.jpeg"),
    ],
    price: 499.9,
    sales: 330,
    discount: 0,
    badge: ProductBadgeType.NONE,
    shipping: ProductShippingType.NONE,
  },
];
