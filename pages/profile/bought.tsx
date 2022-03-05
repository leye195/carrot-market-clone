import Item from "components/Item";
import Layout from "components/Layout";
import type { NextPage } from "next";

const Bought: NextPage = () => {
  return (
    <Layout title="구매내역" canGoBack>
      <div className="flex flex-col space-y-5 py-5 divide-y-2">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Item key={i} title="testItem" price={3} comments={2} hearts={1} />
        ))}
      </div>
    </Layout>
  );
};

export default Bought;
