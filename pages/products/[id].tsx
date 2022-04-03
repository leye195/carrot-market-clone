import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSWRConfig } from "swr";

import { classnames } from "lib/client/utils";
import useQuery from "hooks/useQuery";
import useMutation from "hooks/useMutation";
import useUser from "hooks/useUser";
import { productDetailResponseType } from "types/product";

import Button from "components/Button";
import Profile from "components/Profile";
import Layout from "components/Layout";
import SimilarItem from "components/SimilarItem";
import Dimmer from "components/Dimmer";
import Indicator from "components/Indicator";
import Icon from "components/Icon";

const ItemDetail: NextPage = () => {
  const { query, replace } = useRouter();
  const { user, isLoading } = useUser();
  const { mutate } = useSWRConfig();
  const {
    data,
    error,
    loading,
    mutate: boundMutate,
  } = useQuery<productDetailResponseType>(
    query.id && !isNaN(+query.id) ? `products/${query.id}` : null
  );
  const [toggleFav] = useMutation(`products/${query.id}/fav`);

  const handleClickFavourite = () => {
    if (data) {
      toggleFav();
      boundMutate((prev) => prev && { ...prev, isLiked: !prev.isLiked }, false);
      mutate("users/me");
    }
  };

  useEffect(() => {
    if (error) {
      replace("/");
    }
  }, [data]);

  return (
    <Layout canGoBack>
      {loading && (
        <Dimmer>
          <Indicator />
        </Dimmer>
      )}
      <div className="px-4 pb-16 -mt-2">
        <div className="mb-5">
          <div className="h-96 bg-slate-300 -mx-4" />
          <Link href={`/users/profiles/${data?.product?.user.id}`}>
            <a>
              <Profile
                name={data?.product?.user.name as string}
                desc="View Profile &rarr;"
              />
            </a>
          </Link>
          <div className="mt-6">
            <h1 className="text-3xl font-bold text-gray-900">
              {data?.product?.name}
            </h1>
            <span className="text-2xl mt-3 text-gray-900">
              ${data?.product?.price}
            </span>
            <p className="text-base my-3 text-gray-700">
              {data?.product?.description}
            </p>
            <div className="flex items-center justify-between space-x-2">
              <Button type="button" className="flex-1 ">
                Talk to seller
              </Button>
              <button
                className={classnames(
                  "p-3 flex items-center justify-center rounded-md hover:bg-gray-100",
                  data?.isLiked
                    ? "text-red-400 hover:text-red-500"
                    : "text-gray-400 hover:text-gray-500"
                )}
                onClick={handleClickFavourite}
              >
                {data?.isLiked ? <Icon.HeartSolidIcon /> : <Icon.HeartIcon />}
              </button>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between">
            <h2 className="text-xl font-bold text-gray-900">Similar items</h2>
            <button className="text-gray-500 cursor-pointer">more</button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {data?.relatedProducts?.map((product) => (
              <Link href={`/products/${product.id}`}>
                <a>
                  <SimilarItem
                    key={product.id}
                    title={product.name}
                    price={product.price}
                  />
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ItemDetail;
