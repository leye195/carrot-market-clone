type Props = {
  value?: string;
  onChange?: () => void;
};

const PhoneInput = ({ value, onChange }: Props) => {
  return (
    <div className="flex rounded-md shadow-md">
      <span className="flex items-center justify-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 select-none text-sm">
        +82
      </span>
      <input
        id="phone"
        className="w-full appearance-none px-3 py-2 border-gray-300 rounded-r-md   placeholder-gray-400 shadow-sm 
    focus:outline-none focus:ring-orange-400 focus:border-orange-400"
        type="number"
        required
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default PhoneInput;
