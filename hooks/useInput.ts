import { useState } from "react";

const useInput = (defaultValue: string) => {
  const [input, setInput] = useState<string>(defaultValue);

  const handleInputChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setInput(value);
  };
  return { input, handleInputChange };
};

export default useInput;
