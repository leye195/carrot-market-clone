import type { NextPage } from "next";
import FloatingButton from "components/FloatingButton";
import Layout from "components/Layout";
import { useRouter } from "next/router";
import Item from "components/Item";

const Home: NextPage = () => {
  const router = useRouter();

  const handleLink = () => {
    router.push("/items/upload");
  };

  return (
    <Layout title="홈" hasTabBar>
      <div className="flex flex-col space-y-5  relative divide-y-2">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Item
            key={i}
            title="testItem"
            subTitle="black"
            comments={1}
            hearts={1}
          />
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
