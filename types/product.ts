import { Product, User } from "@prisma/client";

export type productsResponseType = {
  ok: boolean;
  products: Product[];
};

export type productDetailResponseType = {
  ok: boolean;
  product: Product & {
    user: User;
  };
  isLiked: boolean;
  relatedProducts: Product[];
};
