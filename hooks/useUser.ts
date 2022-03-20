import { getUser } from "lib/client/api";
import { useRouter } from "next/router";
import useSWR from "swr";

const useUser = () => {
  const router = useRouter();
  const { data: user } = useSWR("user", async () => {
    const { data } = await getUser();
    if (!data.ok) {
      return router.replace("/enter");
    }

    return data.profile;
  });
  return user;
};

export default useUser;
