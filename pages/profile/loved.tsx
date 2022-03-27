import type { NextPage } from "next";

import Item from "components/Item";
import Layout from "components/Layout";

const Loved: NextPage = () => {
  return (
    <Layout title="관심목록" canGoBack>
      <div className="flex flex-col space-y-5 py-5 divide-y-1">
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

export default Loved;
