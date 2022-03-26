import type { NextPage } from "next";
import Link from "next/link";
import { useEffect } from "react";
import Button from "components/Button";
import Profile from "components/Profile";
import Layout from "components/Layout";
import SimilarItem from "components/SimilarItem";
import { useRouter } from "next/router";
import { productDetailResponseType } from "types/product";
import useQuery from "hooks/useQuery";
import Dimmer from "components/Dimmer";
import Indicator from "components/Indicator";

const ItemDetail: NextPage = () => {
  const { query, replace } = useRouter();
  const { data, error, loading } = useQuery<productDetailResponseType>(
    query.id && !isNaN(+query.id) ? `products/${query.id}` : null
  );

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
          <Link href={`/users/profiles/${data?.product.user.id}`}>
            <a>
              <Profile
                name={data?.product.user.name as string}
                desc="View Profile &rarr;"
              />
            </a>
          </Link>
          <div className="mt-6">
            <h1 className="text-3xl font-bold text-gray-900">
              {data?.product.name}
            </h1>
            <span className="text-2xl mt-3 text-gray-900">
              ${data?.product.price}
            </span>
            <p className="text-base my-3 text-gray-700">
              {data?.product.description}
            </p>
            <div className="flex items-center justify-between space-x-2">
              <Button type="button" className="flex-1 ">
                Talk to seller
              </Button>
              <button className="p-3 flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-md">
                <svg
                  className="h-6 w-6 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
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
            {data?.relatedProducts.map((product) => (
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
