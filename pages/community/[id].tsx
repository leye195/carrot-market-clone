import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useSWRConfig } from "swr";

import { classnames } from "lib/client/utils";
import useUser from "hooks/useUser";
import useMutation from "hooks/useMutation";
import useQuery from "hooks/useQuery";
import {
  commentResponseType,
  postDetailResponseType,
  writeCommentInputType,
} from "types/post";

import Button from "components/Button";
import Profile from "components/Profile";
import TextArea from "components/TextArea";
import Layout from "components/Layout";
import Comment from "components/Comment";
import Indicator from "components/Indicator";
import Dimmer from "components/Dimmer";
import Icon from "components/Icon";

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
  const { data: commentData, mutate: commentMutate } =
    useQuery<commentResponseType>(
      query.id && !isNaN(+query.id) ? `posts/${query.id}/comment` : null,
      {
        refreshInterval: 5000,
      }
    );

  const [uploadAnswer, { data: answerData, loading: answerLoading }] =
    useMutation(`posts/${query.id}/comment`);
  const [toggleWonder, { loading: wonderLoading }] = useMutation(
    `posts/${query.id}/wonder`
  );

  const { register, handleSubmit, resetField } =
    useForm<writeCommentInputType>();

  useEffect(() => {
    if ((data && !data.ok) || error) {
      replace("/community");
    }
  }, [data, loading, error]);

  useEffect(() => {
    if (answerData?.ok) {
      resetField("answer");
      commentMutate();
    }
  }, [answerData]);

  const onValid = (data: writeCommentInputType) => {
    if (answerLoading) return;
    uploadAnswer(data);
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
      !wonderLoading && mutate("users/me");
    }
  };

  return (
    <Layout canGoBack>
      {loading && (
        <Dimmer>
          <Indicator />
        </Dimmer>
      )}
      <div className="pb-[12rem]">
        <div className="pt-4">
          <span className="inline-flex items-center mx-2 px-2 py-0.5 rounded-md text-xs font-medium bg-gray-100">
            ????????????
          </span>
          <Link href={`/users/profiles/${data?.post?.user?.id}`}>
            <a>
              <Profile
                className="px-3 mb-3 border-t-0"
                name={data?.post?.user.name ?? ""}
                desc="View Profile &rarr;"
              />
            </a>
          </Link>
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
              <Icon.WonderIcon />
              <span>???????????? {data?.post?._count.wonderList}</span>
            </span>
            <span className="flex items-center space-x-2 text-sm">
              <Icon.CommentIcon />
              <span>?????? {commentData?.answers.length}</span>
            </span>
          </div>
        </div>
        <div className="px-3 my-5 space-y-4">
          {commentData?.answers.map(
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
        <form
          className="fixed w-full bg-white bottom-0 px-3 mt-2 pb-4"
          onSubmit={handleSubmit(onValid)}
        >
          <label></label>
          <TextArea
            placeholder="Answer this question!"
            register={register("answer", {
              required: "answer should not be empty",
            })}
          />
          <Button className="w-full" type="submit">
            {answerLoading ? "Loading.." : "Reply"}
          </Button>
        </form>
      </div>
    </Layout>
  );
};

export default CommunityPostDetail;
