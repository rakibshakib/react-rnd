"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import User from "./User";

const queryClient = new QueryClient();

const CaseStudy = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="border border-white m-5">
        <p className="text-xs text-white text-center font-semibold py-4">
          Case Study
        </p>
        <div className="p-5 ">
          <User />
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default CaseStudy;
