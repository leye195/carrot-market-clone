import type { NextPage } from "next";
import Button from "components/Button";
import TextArea from "components/TextArea";
import Layout from "components/Layout";
import { useForm } from "react-hook-form";
import { writePostInputType, writePostMutationType } from "types/post";
import useMutation from "hooks/useMutation";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { classnames } from "lib/client/utils";
import Indicator from "components/Indicator";

const Write: NextPage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<writePostInputType>();
  const [uploadPost, { data, error, loading }] =
    useMutation<writePostMutationType>("posts");

  const onValid = (data: writePostInputType) => {
    if (loading) return;
    uploadPost(data);
  };

  useEffect(() => {
    if (data?.ok) {
      router.replace("/community");
    }
  }, [data, error, loading]);

  return (
    <Layout title="글쓰기" canGoBack>
      <form className="px-3 py-16" onSubmit={handleSubmit(onValid)}>
        <TextArea
          placeholder="Ask a question!"
          register={register("question", {
            required: "question should not be empty",
          })}
        />
        <Button
          className={classnames("w-full items-center")}
          type="submit"
          disabled={loading}
        >
          Submit
        </Button>
      </form>
    </Layout>
  );
};

export default Write;
