import { Product, User } from "@prisma/client";

export type productsResponseType = {
  ok: boolean;
  products: (Product & {
    _count?: {
      favs: number;
    };
  })[];
};

export type productDetailResponseType = {
  ok: boolean;
  product: Product & {
    user: User;
  };
  isLiked: boolean;
  relatedProducts: Product[];
};
