import ChatInput from "components/ChatInput";
import ChatMessage from "components/ChatMessage";
import Layout from "components/Layout";

const ChatDetail = () => {
  return (
    <Layout canGoBack>
      <div className="py-10 px-3">
        <div className="space-y-4 pb-14">
          <ChatMessage text="Hi how much are you selling the air" isMe />
          <ChatMessage text="I want $20,000" />
          <ChatMessage text="!????" isMe />
        </div>
        <ChatInput />
      </div>
    </Layout>
  );
};

export default ChatDetail;
