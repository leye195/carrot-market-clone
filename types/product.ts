import { Product, User } from "@prisma/client";

export type productsResponseType = {
  ok: boolean;
  products: Product[];
};

export type productResponseType = {
  ok: boolean;
  product: Product & {
    user: User;
  };
};
