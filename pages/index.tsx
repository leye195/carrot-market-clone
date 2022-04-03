import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

import useUser from "hooks/useUser";
import useQuery from "hooks/useQuery";
import { productsResponseType } from "types/product";

import CustomHead from "components/CustomHead";
import Dimmer from "components/Dimmer";
import Item from "components/Item";
import Indicator from "components/Indicator";
import FloatingButton from "components/FloatingButton";
import Layout from "components/Layout";
import Icon from "components/Icon";

const Home: NextPage = () => {
  const router = useRouter();
  const { user, isLoading } = useUser();
  const { data, loading } = useQuery<productsResponseType>("products");

  const handleLink = () => {
    router.push("/products/upload");
  };

  return (
    <Layout title="홈" hasTabBar>
      <CustomHead title="Home" />
      {loading && (
        <Dimmer>
          <Indicator />
        </Dimmer>
      )}
      <div className="flex flex-col space-y-5  relative divide-y-2">
        {data?.products?.map(({ id, name, price, _count }) => (
          <Link key={id} href={`/products/${id}`}>
            <a className="block">
              <Item
                id={id}
                title={name}
                price={price}
                comments={0}
                hearts={_count!.favs}
              />
            </a>
          </Link>
        ))}
        <FloatingButton onClick={handleLink}>
          <Icon.PlusIcon />
        </FloatingButton>
      </div>
    </Layout>
  );
};

export default Home;
