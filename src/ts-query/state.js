import { useQuery, useQueryClient } from "@tanstack/react-query";

export const globalState = (queryKey, initialValue) => {
  return function () {
    const queryClient = useQueryClient();

    const { data } = useQuery({
      queryKey: [queryKey],
      queryFn: () => Promise.resolve(initialValue),
      refetchInterval: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchIntervalInBackground: false,
    });

    const setData = (data) => {
      queryClient.setQueryData([queryKey], data);
    };

    const resetData = () => {
      queryClient.invalidateQueries({
        queryKey: [queryKey],
      });
      queryClient.refetchQueries({
        queryKey: [queryKey],
      });
    };

    return { data, setData, resetData };
  };
};
