import Layout from "components/Layout";
import Profile from "components/Profile";
import type { NextPage } from "next";

const Chats: NextPage = () => {
  return (
    <Layout title="채팅" hasTabBar>
      <div className="divide-y-[1px]">
        <div className="flex items-center space-x-4 py-4 px-3 cursor-pointer">
          <div className="w-12 h-12 bg-slate-300 rounded-full" />
          <div>
            <p className=" text-gray-700">Steve Jebs</p>
            <p className="text-sm  text-gray-500">
              See you tomorrow in the corner at 2pm!
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4 py-4 px-3 cursor-pointer">
          <div className="w-12 h-12 bg-slate-300 rounded-full" />
          <div>
            <p className=" text-gray-700">Steve Jebs</p>
            <p className="text-sm  text-gray-500">
              See you tomorrow in the corner at 2pm!
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4 py-4 px-3 cursor-pointer">
          <div className="w-12 h-12 bg-slate-300 rounded-full" />
          <div>
            <p className=" text-gray-700">Steve Jebs</p>
            <p className="text-sm  text-gray-500">
              See you tomorrow in the corner at 2pm!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Chats;
