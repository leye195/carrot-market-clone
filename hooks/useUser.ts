import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";

const useUser = () => {
  const router = useRouter();
  const { data, error } = useSWR("/users/me");

  useEffect(() => {
    if (data) {
      const { ok } = data;
      if (!ok) {
        router.replace("/enter");
      }
    }
  }, [data, router]);

  return { user: data?.profile, isLoading: !data && !error };
};

export default useUser;
