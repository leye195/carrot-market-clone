import type { NextPage } from "next";

import Item from "components/Item";
import Layout from "components/Layout";

const Sold: NextPage = () => {
  return (
    <Layout title="판매내역" canGoBack>
      <div className="flex flex-col space-y-5 py-5 divide-y-2">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Item
            key={i}
            id={i}
            title="testItem"
            subTitle="black"
            price={3}
            comments={2}
            hearts={1}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Sold;
