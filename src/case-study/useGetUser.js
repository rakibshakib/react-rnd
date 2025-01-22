import { fakeUserData } from "@/lib/fakeData";
import { useQuery } from "@tanstack/react-query";

export const useGetUserList = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: () =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(fakeUserData);
        }, 2000); // Resolve after 2 seconds
      }),
    refetchInterval: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchIntervalInBackground: false,
  });
};
