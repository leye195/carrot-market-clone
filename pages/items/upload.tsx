import type { NextPage } from "next";
import Button from "components/Button";
import TextArea from "components/TextArea";

const ItemUpload: NextPage = () => {
  return (
    <div className="px-4 py-16 flex flex-col">
      <div>
        <label
          className="w-full flex items-center justify-center border-2 border-dashed  border-gray-300 h-48 rounded-md
            hover:border-orange-500 hover:text-orange-500 hover:cursor-pointer transition-colors
        "
        >
          <svg
            className="h-12 w-12"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input className="hidden" type="file" />
        </label>
      </div>
      <div className="my-6">
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
      <Button type="button">Upload product</Button>
    </div>
  );
};

export default ItemUpload;
