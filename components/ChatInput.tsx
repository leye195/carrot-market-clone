type Props = {
  value?: string;
  onChange?: () => void;
  onClick?: () => void;
};

const ChatInput = ({ value, onChange, onClick }: Props) => {
  return (
    <div className="fixed w-full mx-auto bottom-0 left-0 right-0 inset-x-0 bg-gray-200 px-4 pb-4 pt-2">
      <div className="flex items-center relative">
        <input
          className="pr-12 shadow-sm rounded-full w-full border-gray-300 focus:ring-orange-400 focus:border-orange-500 focus:outline-none"
          type="text"
          value={value}
          onChange={onChange}
        />
        <div className="absolute text-gray-500 inset-y-0 flex py-1.5 pr-1.5 right-0">
          <button
            type="button"
            className="flex items-center bg-orange-400 rounded-full px-3 text-sm text-white
        hover:bg-orange-500 focus:ring-2 focus:ring-offset-2 focus:ring-orange-400"
            onClick={onClick}
          >
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
