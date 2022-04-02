import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

import useMutation from "hooks/useMutation";
import useQuery from "hooks/useQuery";
import { postDetailResponseType, writeCommentInputType } from "types/post";

import Button from "components/Button";
import Profile from "components/Profile";
import TextArea from "components/TextArea";
import Layout from "components/Layout";
import Comment from "components/Comment";
import Indicator from "components/Indicator";
import Dimmer from "components/Dimmer";
import { useSWRConfig } from "swr";
import { classnames } from "lib/client/utils";
import useUser from "hooks/useUser";

const CommunityPostDetail: NextPage = () => {
  const { query, replace } = useRouter();
  const { user } = useUser();

  const { mutate } = useSWRConfig();
  const {
    data,
    loading,
    error,
    mutate: boundMutate,
  } = useQuery<postDetailResponseType>(
    query.id && !isNaN(+query.id) ? `posts/${query.id}` : null,
    {
      refreshInterval: 5000,
    }
  );
  const [uploadAnswer, { data: answerData, loading: answerLoading }] =
    useMutation(`posts/${query.id}/comment`);
  const [toggleWonder] = useMutation(`posts/${query.id}/wonder`);

  const { register, handleSubmit, resetField } =
    useForm<writeCommentInputType>();

  useEffect(() => {
    if (error) {
      replace("/community");
    }
  }, [data, loading, error]);

  const onValid = (data: writeCommentInputType) => {
    if (answerLoading) return;
    uploadAnswer(data);
    boundMutate(
      (prev) =>
        prev &&
        query && {
          ...prev,
          post: {
            ...prev.post,
            answers: [
              ...prev.post.answers,
              {
                id: prev.post.answers[prev.post.answers.length - 1].id + 1,
                answer: data.answer,
                createdAt: new Date(),
                updatedAt: new Date(),
                postId: +(query.id as string),
                user,
                userId: user.id,
              },
            ],
          },
        }
    );
    mutate(`posts/${query.id}`);
    resetField("answer");
  };

  const handleClickWonder = () => {
    if (data) {
      toggleWonder();
      boundMutate(
        (prev) =>
          prev && {
            ...prev,
            post: {
              ...prev.post,
              _count: {
                ...prev.post._count,
                wonderList: prev.isWondering
                  ? prev.post._count.wonderList - 1
                  : prev.post._count.wonderList + 1,
              },
            },
            isWondering: !prev.isWondering,
          },
        false
      );
      mutate("users/me");
    }
  };

  return (
    <Layout canGoBack>
      {loading && (
        <Dimmer>
          <Indicator />
        </Dimmer>
      )}
      <div className="pb-8">
        <div className="pt-4">
          <span className="inline-flex items-center mx-2 px-2 py-0.5 rounded-md text-xs font-medium bg-gray-100">
            동네질문
          </span>
          <Profile
            className="px-3 mb-3 border-t-0"
            name={data?.post?.user.name ?? ""}
            desc="View Profile &rarr;"
          />
        </div>
        <div className="flex flex-col items-start">
          <p className="px-3 text-gray-700 ">
            <span className="text-orange-500 font-medium">Q.</span>{" "}
            {data?.post?.question}
          </p>
          <div className="flex space-x-4 mt-3 text-gray-700 px-3 py-2 border-t-[1.5px] border-b-[1.5px] w-full">
            <span
              className={classnames(
                "flex items-center space-x-2 text-sm cursor-pointer",
                data?.isWondering ? " text-orange-400" : ""
              )}
              onClick={handleClickWonder}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>궁금해요 {data?.post?._count.wonderList}</span>
            </span>
            <span className="flex items-center space-x-2 text-sm">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                ></path>
              </svg>
              <span>답변 {data?.post?.answers.length}</span>
            </span>
          </div>
        </div>
        <div className="px-3 my-5 space-y-4">
          {data?.post?.answers.map(
            ({ id, answer, updatedAt, user: { name } }) => (
              <Comment
                key={id}
                name={name}
                text={answer}
                updateAt={updatedAt}
              />
            )
          )}
        </div>
        <form className="px-3 mt-2" onSubmit={handleSubmit(onValid)}>
          <label></label>
          <TextArea
            placeholder="Answer this question!"
            register={register("answer", {
              required: "answer should not be empty",
            })}
          />
          <Button className="w-full" type="submit">
            Reply
          </Button>
        </form>
      </div>
    </Layout>
  );
};

export default CommunityPostDetail;
