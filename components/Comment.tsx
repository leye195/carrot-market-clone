type Props = {
  name?: string;
  text?: string;
};

const Comment = ({ name = "Jebs", text = "what nice man" }: Props) => {
  return (
    <div className="flex items-start space-x-3">
      <div className="w-8 h-8 bg-slate-200 rounded-full" />
      <div>
        <span className="text-sm block font-medium text-gray-700">{name}</span>
        <span className="text-xs text-gray-500 block">2시간 전</span>
        <p className="text-gray-700">{text}</p>
      </div>
    </div>
  );
};

export default Comment;
