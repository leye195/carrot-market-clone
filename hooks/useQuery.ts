import { useEffect, useState } from "react";
import useSWR from "swr";

type optionType = {
  suspense?: boolean;
  revalidateIfStale?: boolean;
  revalidateOnFocus?: boolean;
  revalidateOnMount?: boolean;
  revalidateOnReconnect?: boolean;
  refreshInterval?: number;
  refreshWhenHidden?: boolean;
  refreshWhenOffline?: boolean;
  focusThrottleInterval?: number;
  errorRetryCount?: number;
  shouldRetryOnError?: boolean;
};

const useQuery = <T = any>(key: any, options?: optionType) => {
  const { data, error, mutate } = useSWR<T>(key, null, options);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data || error) {
      setLoading(false);
    }
  }, [data, error]);

  return { data, error, loading, mutate };
};

export default useQuery;
