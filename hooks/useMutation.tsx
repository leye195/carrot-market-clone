import api from "lib/client/api";
import { useState } from "react";

type mutationReturnType = [
  (data?: any) => void,
  { loading: boolean; data: undefined | any; error: undefined | any }
];

const useMutation = (url: string): mutationReturnType => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<undefined | any>(null);
  const [error, setError] = useState<undefined | any>(null);

  const mutation = async (data?: any) => {
    setLoading(true);
    try {
      const result = await api.post(url, data);
      setData(result.data);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  return [mutation, { loading, data, error }];
};

export default useMutation;
