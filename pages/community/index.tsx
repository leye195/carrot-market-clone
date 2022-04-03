import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

import useQuery from "hooks/useQuery";
import { postResponseType } from "types/post";

import FloatingButton from "components/FloatingButton";
import Layout from "components/Layout";
import Question from "components/Question";
import Dimmer from "components/Dimmer";
import Indicator from "components/Indicator";
import Icon from "components/Icon";
import { useEffect } from "react";

const Community: NextPage = () => {
  const router = useRouter();
  const { data, error, loading } = useQuery<postResponseType>("posts");

  const handleLink = () => {
    router.push("/community/write");
  };

  useEffect(() => {
    if (error) {
      router.replace("/404");
    }
  }, [error]);

  return (
    <Layout title="동네생활" hasTabBar>
      {loading && (
        <Dimmer>
          <Indicator />
        </Dimmer>
      )}
      <div className="space-y-4 bg-gray-200">
        {data?.posts?.map(({ id, question, user, _count, updatedAt }) => (
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
        <Icon.PencilIcon />
      </FloatingButton>
    </Layout>
  );
};

export default Community;
