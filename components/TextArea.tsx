type Props = {
  id?: string;
  className?: string;
  placeholder?: string;
  value?: string;
  onChange?: () => void;
};

const TextArea = ({
  id = "",
  className = "",
  placeholder = "",
  value = "",
  onChange,
}: Props) => {
  return (
    <textarea
      id={id}
      className={`mb-3 shadow-sm w-full resize-none rounded-md outline-none border-gray-300
    focus:outline-none focus:ring-orange-400 focus:border-orange-400 ${className}
  `}
      rows={4}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    ></textarea>
  );
};

export default TextArea;
