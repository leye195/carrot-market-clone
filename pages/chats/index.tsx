import Chat from "components/Chat";
import Layout from "components/Layout";
import type { NextPage } from "next";

const Chats: NextPage = () => {
  return (
    <Layout title="채팅" hasTabBar>
      <div className="divide-y-[1px]">
        <Chat />
        <Chat />
      </div>
    </Layout>
  );
};

export default Chats;
