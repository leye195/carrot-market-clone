import type { NextPage } from "next";
import Button from "components/Button";
import TextArea from "components/TextArea";
import Layout from "components/Layout";

const Write: NextPage = () => {
  return (
    <Layout title="글쓰기" canGoBack>
      <form className="px-3 py-16">
        <TextArea placeholder="Ask a question!" />
        <Button className="w-full" type="button">
          Submit
        </Button>
      </form>
    </Layout>
  );
};

export default Write;
