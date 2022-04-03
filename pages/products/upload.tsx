import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

import {
  uploadProductInputType,
  uploadProductMutationType,
} from "types/upload";
import useMutation from "hooks/useMutation";

import Button from "components/Button";
import TextArea from "components/TextArea";
import Layout from "components/Layout";
import Input from "components/Input";
import useCoords from "hooks/useCoords";

const ItemUpload: NextPage = () => {
  const router = useRouter();
  const { lat, lng } = useCoords();
  const [uploadProduct, { loading, error, data }] =
    useMutation<uploadProductMutationType>("products");
  const { register, handleSubmit } = useForm<uploadProductInputType>();

  const onValid = (data: uploadProductInputType) => {
    if (loading) return;
    uploadProduct({ ...data, lat, lng });
  };

  useEffect(() => {
    if (data?.ok) {
      router.replace(`/products/${data.product.id}`);
    }
  }, [data, error, loading]);

  return (
    <Layout title="물건 글쓰기" canGoBack>
      <form
        className="px-4 py-10 space-y-5 flex flex-col"
        onSubmit={handleSubmit(onValid)}
      >
        <div>
          <label
            className="w-full flex items-center justify-center border-2 border-dashed  border-gray-300 h-48 rounded-md
            hover:border-orange-500 hover:text-orange-500 hover:cursor-pointer transition-colors
        "
          >
            <svg
              className="h-12 w-12"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input className="hidden" type="file" {...register("image")} />
          </label>
        </div>
        <Input
          label="Name"
          name="name"
          type="text"
          register={register("name", {
            required: "Name should not be empty",
          })}
        />
        <Input
          label="Price"
          name="price"
          kind="price"
          register={register("price", {
            required: "Price should not be empty",
          })}
        />
        <TextArea
          label="Description"
          name="description"
          register={register("description", {
            required: "Description should not be empty",
          })}
        />
        <Button type="submit">
          {loading ? "Loading..." : "Upload product"}
        </Button>
      </form>
    </Layout>
  );
};

export default ItemUpload;
