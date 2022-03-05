import type { NextPage } from "next";
import Button from "components/Button";
import Profile from "components/Profile";
import TextArea from "components/TextArea";
import Layout from "components/Layout";
import Comment from "components/Comment";

const CommunityPostDetail: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="pb-8">
        <div className="pt-4">
          <span className="inline-flex items-center mx-2 px-2 py-0.5 rounded-md text-xs font-medium bg-gray-100">
            동네질문
          </span>
          <Profile
            className="px-3 mb-3 border-t-0"
            name="Steve Jebs"
            desc="View Profile &rarr;"
          />
        </div>
        <div className="flex flex-col items-start">
          <p className="px-3 text-gray-700 ">
            <span className="text-orange-500 font-medium">Q.</span> What is the
            best mandu restaurant?
          </p>
          <div className="flex space-x-4 mt-3 text-gray-700 px-3 py-2 border-t-[1.5px] border-b-[1.5px] w-full">
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
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>궁금해요 1</span>
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
              <span>답변 1</span>
            </span>
          </div>
        </div>
        <div className="px-3 my-5 space-y-4">
          <Comment />
          <Comment />
          <Comment />
        </div>
        <div className="px-3 mt-2">
          <label></label>
          <TextArea placeholder="Answer this question!" />
          <Button className="w-full" type="button">
            Reply
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default CommunityPostDetail;
