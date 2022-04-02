import { useState } from "react";

import api from "lib/client/api";

type mutationReturnType<T> = [
  (data?: any) => void,
  { loading: boolean; data?: T; error?: unknown }
];

const useMutation = <T = any>(url: string): mutationReturnType<T> => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<T>();
  const [error, setError] = useState<unknown>();

  const mutation = async (data?: any) => {
    setLoading(true);
    try {
      const result = await api.post<T>(url, data);
      setData(result);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  return [mutation, { loading, data, error }];
};

export default useMutation;
