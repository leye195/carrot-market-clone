import { classnames } from "lib";

type Props = {
  isMe?: boolean;
  text: string;
};

const ChatMessage = ({ isMe, text }: Props) => {
  return (
    <div
      className={`${classnames(
        isMe ? "" : "flex-row-reverse space-x-reverse"
      )} flex items-start space-x-2`}
    >
      <div className="w-8 h-8 bg-slate-300 rounded-full" />
      <div className="w-1/2 text-sm text-gray-700 p-2 border rounded-md border-gray-300">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
