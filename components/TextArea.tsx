import { UseFormRegisterReturn } from "react-hook-form";

type Props = {
  label?: string;
  name?: string;
  className?: string;
  placeholder?: string;
  onChange?: () => void;
  value?: string;
  register?: UseFormRegisterReturn;
  [key: string]: any;
};

const TextArea = ({
  name = "",
  className = "",
  label = "",
  placeholder = "",
  value,
  onChange,
  register,
  ...rest
}: Props) => {
  return (
    <div>
      <label className="text-sm text-gray-700 block mb-1.5" htmlFor={name}>
        {label}
      </label>
      <textarea
        id={name}
        className={`mb-3 shadow-sm w-full resize-none rounded-md outline-none border-gray-300
    focus:outline-none focus:ring-orange-400 focus:border-orange-400 ${className}
  `}
        rows={4}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...register}
        {...rest}
      ></textarea>
    </div>
  );
};

export default TextArea;
