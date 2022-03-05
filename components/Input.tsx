type Props = {
  label: string;
  name: string;
  className?: string;
  placeholder?: string;
  value?: string;
  required?: boolean;
  onChange?: () => void;
  kind?: "text" | "price" | "phone" | "email";
  [key: string]: any;
};

const Input = ({
  label,
  name,
  className,
  placeholder,
  value,
  required,
  onChange,
  kind = "text",
  ...rest
}: Props) => {
  return (
    <div className={className}>
      <label className="text-sm text-gray-700 block mb-1.5" htmlFor={name}>
        {label}
      </label>
      {kind === "text" && (
        <input
          id={name}
          className={`w-full appearance-none  py-2 border-gray-300 rounded-md  placeholder-gray-400 shadow-sm 
      focus:outline-none focus:ring-orange-400 focus:border-orange-400`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          {...rest}
        />
      )}
      {kind === "price" && (
        <div className="flex items-center rounded-md shadow-sm relative">
          <div className="absolute left-0 pl-2 flex items-center justify-center text-sm pointer-events-none">
            <span className="text-gray-500 ">$</span>
          </div>
          <input
            id={name}
            className={`w-full appearance-none pl-6 py-2 border-gray-300 rounded-md  placeholder-gray-400 shadow-sm 
      focus:outline-none focus:ring-orange-400 focus:border-orange-400 ${className}`}
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
            {...rest}
          />
          <div className="absolute right-0 text-sm pr-2  flex items-center justify-center pointer-events-none">
            <span className="text-gray-500">KRW</span>
          </div>
        </div>
      )}
      {kind === "phone" && (
        <div className="flex rounded-md shadow-md">
          <span className="flex items-center justify-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 select-none text-sm">
            +82
          </span>
          <input
            id={name}
            className="w-full appearance-none px-3 py-2 border-gray-300 rounded-r-md   placeholder-gray-400 shadow-sm 
    focus:outline-none focus:ring-orange-400 focus:border-orange-400"
            type="number"
            required
            value={value}
            onChange={onChange}
            {...rest}
          />
        </div>
      )}
      {kind === "email" && (
        <input
          id={name}
          className="w-full appearance-none px-3 py-2 border-gray-300 rounded-md  placeholder-gray-400 shadow-sm 
      focus:outline-none focus:ring-orange-400 focus:border-orange-400"
          type="email"
          required
          value={value}
          onChange={onChange}
          {...rest}
        />
      )}
    </div>
  );
};

export default Input;
