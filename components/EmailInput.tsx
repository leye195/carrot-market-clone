type Props = {
  value?: string;
  onChange?: () => void;
};

const EmailInput = ({ value, onChange }: Props) => {
  return (
    <input
      id="email"
      className="w-full appearance-none px-3 py-2 border-gray-300 rounded-md  placeholder-gray-400 shadow-sm 
      focus:outline-none focus:ring-orange-400 focus:border-orange-400"
      type="email"
      required
      value={value}
      onChange={onChange}
    />
  );
};

export default EmailInput;
