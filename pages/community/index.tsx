import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

import useQuery from "hooks/useQuery";
import { postResponseType } from "types/post";

import FloatingButton from "components/FloatingButton";
import Layout from "components/Layout";
import Question from "components/Question";

const Community: NextPage = () => {
  const router = useRouter();
  const { data, error, loading } = useQuery<postResponseType>("posts");

  const handleLink = () => {
    router.push("/community/write");
  };

  return (
    <Layout title="동네생활" hasTabBar>
      <div className="space-y-4 bg-gray-200">
        {data?.posts.map(({ id, question, user, _count, updatedAt }) => (
          <Link href={`/community/${id}`} key={id}>
            <a className="block">
              <Question
                question={question}
                name={user.name}
                answers={_count.answers}
                wonders={_count.wonderList}
                updatedAt={updatedAt}
              />
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
