import type { NextPage } from "next";
import Button from "components/Button";
import TextArea from "components/TextArea";
import Layout from "components/Layout";

const CreateStream: NextPage = () => {
  return (
    <Layout title="라이브 생성" canGoBack>
      <div className="px-4 py-10 space-y-5">
        <div>
          <label className="text-sm text-gray-700 block mb-1.5" htmlFor="name">
            Name
          </label>
          <div className="flex items-center rounded-md shadow-sm relative">
            <input
              id="name"
              className="w-full appearance-none py-2 border-gray-300 rounded-md  placeholder-gray-400 shadow-sm 
            focus:outline-none focus:ring-orange-400 focus:border-orange-400"
              type="text"
            />
          </div>
        </div>
        <div>
          <label className="text-sm text-gray-700 block mb-1.5" htmlFor="price">
            Price
          </label>
          <div className="flex items-center rounded-md shadow-sm relative">
            <div className="absolute left-0 pl-2 flex items-center justify-center text-sm pointer-events-none">
              <span className="text-gray-500 ">$</span>
            </div>
            <input
              id="price"
              className="w-full appearance-none pl-6 py-2 border-gray-300 rounded-md  placeholder-gray-400 shadow-sm 
            focus:outline-none focus:ring-orange-400 focus:border-orange-400"
              type="text"
              placeholder="0.00"
            />
            <div className="absolute right-0 text-sm pr-2  flex items-center justify-center pointer-events-none">
              <span className="text-gray-500">USD</span>
            </div>
          </div>
        </div>
        <div>
          <label
            className="text-sm text-gray-700 block mb-1.5"
            htmlFor="description"
          >
            Description
          </label>
          <TextArea id="description" />
        </div>
        <Button className="w-full" type="button">
          Go Live
        </Button>
      </div>
    </Layout>
  );
};

export default CreateStream;
