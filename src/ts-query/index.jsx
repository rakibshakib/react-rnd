"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BuilderPages from "./builder";
const queryClient = new QueryClient();

const UsingTSQuery = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="border border-white m-5">
        {/* <p className="text-xs text-white text-center font-semibold py-4">
          Using Query
        </p>
        <Parent /> */}

        <BuilderPages />
      </div>
    </QueryClientProvider>
  );
};

export default UsingTSQuery;
