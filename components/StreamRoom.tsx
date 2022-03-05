type Props = {
  title: string;
};

const StreamRoom = ({ title = "당근 중고거래 라이브" }: Props) => {
  return (
    <div className="px-3 pt-4">
      <div className="w-full bg-slate-400 aspect-video rounded-md shadow-sm" />
      <h3 className="text-gray-700 text-lg mt-2">{title}</h3>
    </div>
  );
};

export default StreamRoom;
