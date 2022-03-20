import type { NextPage } from "next";
import Link from "next/link";
import useSWR from "swr";
import FloatingButton from "components/FloatingButton";
import Layout from "components/Layout";
import { useRouter } from "next/router";
import Item from "components/Item";
import useUser from "hooks/useUser";
import CustomHead from "components/CustomHead";
import { productsResponseType } from "types/product";

const Home: NextPage = () => {
  const router = useRouter();
  const { user, isLoading } = useUser();
  const { data } = useSWR<productsResponseType>("products");

  const handleLink = () => {
    router.push("/products/upload");
  };

  return (
    <Layout title="홈" hasTabBar>
      <CustomHead title="Home" />
      <div className="flex flex-col space-y-5  relative divide-y-2">
        {data?.products.map(({ id, name, price }) => (
          <Link key={id} href={`/products/${id}`}>
            <a className="block">
              <Item
                id={id}
                title={name}
                price={price}
                comments={1}
                hearts={1}
              />
            </a>
          </Link>
        ))}
        <FloatingButton onClick={handleLink}>
          <svg
            className="h-6 w-6"
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
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </FloatingButton>
      </div>
    </Layout>
  );
};

export default Home;
