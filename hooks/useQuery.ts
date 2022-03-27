import { useEffect, useState } from "react";
import useSWR from "swr";

const useQuery = <T = any>(key: any) => {
  const { data, error, mutate } = useSWR<T>(key);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data || error) {
      setLoading(false);
    }
  }, [data, error]);

  return { data, error, loading, mutate };
};

export default useQuery;
