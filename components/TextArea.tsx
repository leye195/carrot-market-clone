type Props = {
  id?: string;
  className?: string;
};

const TextArea = ({ id = "", className = "" }: Props) => {
  return (
    <textarea
      id={id}
      className={`mb-3 shadow-sm w-full resize-none rounded-md outline-none border-gray-300
    focus:outline-none focus:ring-orange-400 focus:border-orange-400 ${className}
  `}
      rows={4}
    ></textarea>
  );
};

export default TextArea;
