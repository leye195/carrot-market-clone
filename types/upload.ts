import { Product } from "@prisma/client";

export type uploadProductInputType = {
  image?: string;
  name: string;
  price: number;
  description: string;
};

export type uploadProductMutationType = {
  ok: boolean;
  product: Product;
};
