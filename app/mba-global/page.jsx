import GlobalTable from "@/components/global-table/GlobalTable";
import { prisma } from "@/prisma/prisma";
import React from "react";

const GlobalMBA = async () => {
  const rankings = await prisma.globalMba.findMany();
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">
        Global MBA Rankings 2025
      </h1>
      <GlobalTable rankings={rankings} />
    </div>
  );
};

export default GlobalMBA;
