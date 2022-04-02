import type { NextPage } from "next";

import ChatInput from "components/ChatInput";
import ChatMessage from "components/ChatMessage";
import Layout from "components/Layout";

const StreamDetail: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className=" space-y-4">
        <div className="px-3 pt-4">
          <div className="w-full bg-slate-400 aspect-video rounded-md shadow-sm" />
          <h1 className="mt-2 text-xl font-bold text-gray-900">Galaxy S100</h1>
          <span className="text-lg mt-3 text-gray-900">$100</span>
          <p className="text-base my-3 text-gray-700">
            My money&apos;s in that office, right? If she start giving me some
            bullshit about it ain&apos;t there, and we got to go someplace else
            and get it, I&apos;m gonna shoot you in the head then and there.
            Then I&apos;m gonna shoot that bitch in the kneecaps, find out where
            my goddamn money is. She gonna tell me too. Hey, look at me when
            I&apos;m talking to you, motherfucker. You listen: we go in there,
            and that ni**a Winston or anybody else is in there, you the first
            motherfucker to get shot. You understand?
          </p>
          <section className="mt-5">
            <h4 className="font-semibold  text-base">라이브 채팅</h4>
            <div className="mt-4 pb-16 h-[50vh]  overflow-y-scroll px-3 scrollbar-hide">
              <div className="space-y-4 pb-6">
                <ChatMessage text="Hi how much are you selling the air" isMe />
                <ChatMessage text="I want $20,000" />
                <ChatMessage text="미쳤어?" isMe />
              </div>
            </div>
          </section>
        </div>
        <ChatInput />
      </div>
    </Layout>
  );
};

export default StreamDetail;
