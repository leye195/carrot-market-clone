import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import FloatingButton from "components/FloatingButton";
import Layout from "components/Layout";
import Question from "components/Question";

const Community: NextPage = () => {
  const router = useRouter();

  const handleLink = () => {
    router.push("/community/write");
  };
  return (
    <Layout title="동네생활" hasTabBar>
      <div className="space-y-4 bg-gray-200">
        {[1, 2, 3, 4, 5].map((_, i) => (
          <Link href={`/community/${i}`} key={i}>
            <a className="block">
              <Question />
            </a>
          </Link>
        ))}
      </div>
      <FloatingButton onClick={handleLink}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          ></path>
        </svg>
      </FloatingButton>
    </Layout>
  );
};

export default Community;
