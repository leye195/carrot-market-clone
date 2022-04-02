import type { NextPage } from "next";

import Button from "components/Button";
import TextArea from "components/TextArea";
import Layout from "components/Layout";
import Input from "components/Input";

const CreateStream: NextPage = () => {
  return (
    <Layout title="라이브 생성" canGoBack>
      <div className="px-4 py-10 space-y-5">
        <Input label="Name" name="name" type="text" />
        <Input label="Price" name="price" kind="price" />
        <TextArea name="description" label="Description" />
        <Button className="w-full" type="button">
          Go Live
        </Button>
      </div>
    </Layout>
  );
};

export default CreateStream;
