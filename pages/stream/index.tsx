import type { NextPage } from "next";
import FloatingButton from "components/FloatingButton";
import Layout from "components/Layout";
import { useRouter } from "next/router";
import StreamRoom from "components/StreamRoom";

const Stream: NextPage = () => {
  const router = useRouter();

  const handleLink = () => {
    router.push("/stream/create");
  };

  return (
    <Layout title="라이브" hasTabBar>
      <div className="pb-5 space-y-4 divide-y-2">
        {[1, 2, 3, 4, 5].map((i) => (
          <StreamRoom key={i} />
        ))}
        <FloatingButton onClick={handleLink}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        </FloatingButton>
      </div>
    </Layout>
  );
};

export default Stream;
