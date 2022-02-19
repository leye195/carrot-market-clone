import type { NextPage } from "next";
import Button from "components/Button";
import TextArea from "components/TextArea";

const Write: NextPage = () => {
  return (
    <form className="px-3 py-16">
      <TextArea placeholder="Ask a question!" />
      <Button className="w-full" type="button">
        Submit
      </Button>
    </form>
  );
};

export default Write;
