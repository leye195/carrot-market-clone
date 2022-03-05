type Props = {
  name?: string;
  text?: string;
};

const Chat = ({
  name = "Steve Jebs",
  text = "See you tomorrow in the corner at 2pm!",
}: Props) => {
  return (
    <div className="flex items-center space-x-4 py-4 px-3 cursor-pointer">
      <div className="w-12 h-12 bg-slate-300 rounded-full" />
      <div>
        <p className=" text-gray-700">{name}</p>
        <p className="text-sm  text-gray-500">{text}</p>
      </div>
    </div>
  );
};

export default Chat;
