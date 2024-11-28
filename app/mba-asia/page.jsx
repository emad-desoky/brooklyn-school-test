import GlobalTable from "@/components/global-table/GlobalTable";
import { prisma } from "@/prisma/prisma";
import React from "react";

const AsiaMBA = async () => {
  const rankings = await prisma.globalMba.findMany({
    where: { region: "Asia" },
  });
  return (
    <div>
      <GlobalTable rankings={rankings} />
    </div>
  );
};

export default AsiaMBA;
